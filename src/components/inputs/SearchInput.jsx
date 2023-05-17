import { CiSearch } from 'react-icons/ci';
import {
  Button,
  useTheme,
  InputBase,
  Stack,
  FormControl,
  FormHelperText,
} from '@mui/material';
import { useState, useContext, useRef } from 'react';
import DataContext from '../../contexts/UserContext';

export default function CustomizedInputBase() {
  const { loadUser, dark, errorStatus, helperText, setIsLoading } =
    useContext(DataContext);

  const theme = useTheme();

  const myInputRef = useRef(null);

  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    loadUser(searchInput);
    setSearchInput('');
    setIsLoading(true);
    myInputRef.current.focus();
  };

  return (
    <FormControl
      error={errorStatus}
      variant='standard'
      sx={{
        p: '8px',
        flexDirection: 'row',
        borderRadius: theme.shapes.borderRadius,
        boxShadow: `${
          dark ? 'none' : '0 15px 15px rgba(150, 146, 146, 0.116)'
        }`,
        bgcolor: 'darkPrimary.light',
        position: 'relative',
      }}
    >
      <Stack
        alignItems='center'
        justifyContent='center'
        sx={{
          mr: { xs: '0', sm: '15px' },
          ml: { xs: '7px', sm: '25px' },
          p: 0,
          cursor: 'default',
          '& svg': {
            width: { xs: '26px', sm: '30px' },
            height: { xs: '26px', sm: '30px' },
          },
        }}
        color='primary.main'
      >
        <CiSearch />
      </Stack>
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          color: 'darkPrimary.main',
        }}
        inputRef={myInputRef}
        placeholder='Search GitHub username...'
        inputProps={{ 'aria-label': 'search-github-username' }}
        value={searchInput}
        onChange={handleInputChange}
      />
      <FormHelperText
        sx={{
          position: 'absolute',
          top: { xs: '58px', sm: '32%' },
          left: { xs: '70%', sm: '64.5%', md: '70%' },
          bgcolor: 'transparent',
          fontSize: '15px',
          fontWeight: 'bold',
          fontFamily: "'Space Mono', monospace",
        }}
      >
        {helperText}
      </FormHelperText>

      <Button
        variant='contained'
        sx={{
          px: { xs: 1.89, sm: 2.8 },
          py: 1.4,
          borderRadius: theme.shapes.borderRadius,
        }}
        onClick={handleSearchClick}
      >
        Search
      </Button>
    </FormControl>
  );
}
