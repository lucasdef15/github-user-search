import { useState, createContext } from 'react';
import axios from 'axios';

const API_URL = 'https://api.github.com/users/';

const UserContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [dark, setDark] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async (userName) => {
    try {
      const response = await axios.get(`${API_URL}${userName}`);
      setData(response.data);

      if (response.status === 200 || response.status === 201) {
        setErrorStatus(false);
        setIsLoading(false);
        setHelperText('');
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          setErrorStatus(true);
          setHelperText('No results');
          setIsLoading(false);
        }
      } else if (err.request) {
        console.error('Request was made but no reponse', err.response);
      } else {
        console.error(err.message);
      }
    }
  };

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      'en-US',
      options
    );

    return `Joined ${formattedDate}`;
  };

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <UserContext.Provider
      value={{
        loadUser,
        formatDate,
        data,
        toggleDarkMode,
        dark,
        errorStatus,
        helperText,
        setIsLoading,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
