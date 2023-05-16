import { CiSearch } from 'react-icons/ci';
import { Button, useTheme, InputBase, Paper, Stack } from '@mui/material';
import { useState, useContext } from 'react';
import DataContext from '../../contexts/UserContext';

export default function CustomizedInputBase() {
  const { loadUser } = useContext(DataContext);
  const theme = useTheme();
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    loadUser(searchInput);
    setSearchInput('');
  };

  return (
    <Paper
      component='form'
      sx={{
        p: '8px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.shapes.borderRadius,
        boxShadow: '0 15px 15px rgba(150, 146, 146, 0.116)',
        bgcolor: 'darkPrimary.light',
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
        }}
        placeholder='Search GitHub username...'
        inputProps={{ 'aria-label': 'search github username' }}
        value={searchInput}
        onChange={handleInputChange}
      />
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
    </Paper>
  );
}
