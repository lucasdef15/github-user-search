import { useState, createContext } from 'react';
import axios from 'axios';

const API_URL = 'https://api.github.com/users/';

const UserContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [dark, setDark] = useState(false);

  const loadUser = async (userName) => {
    try {
      const response = await axios.get(`${API_URL}${userName}`);
      setData(response.data);
      console.log(response.data);
    } catch (err) {
      console.error('Error fetching data', err);
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

  return (
    <UserContext.Provider value={{ loadUser, formatDate, data, setDark, dark }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
