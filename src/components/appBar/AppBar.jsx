import { Typography, Button, Toolbar, Box, AppBar } from '@mui/material';
import { RiMoonFill } from 'react-icons/ri';
import { BsFillSunFill } from 'react-icons/bs';
import { useContext } from 'react';
import DataContext from '../../contexts/UserContext';

export default function ButtonAppBar() {
  const { toggleDarkMode, dark } = useContext(DataContext);

  return (
    <Box sx={{ flexGrow: 1, p: 0 }}>
      <AppBar
        position='static'
        color='transparent'
        sx={{
          boxShadow: 'none',
        }}
      >
        <Toolbar
          className='heyhey'
          sx={{
            '&.MuiToolbar-root': {
              padding: false,
            },
          }}
        >
          <Typography
            variant='h1'
            component='div'
            color='darkPrimary.main'
            sx={{ flexGrow: 1, fontSize: '1.625rem' }}
          >
            devfinder
          </Typography>
          <Button
            endIcon={dark ? <BsFillSunFill /> : <RiMoonFill />}
            size='large'
            sx={{
              color: 'secondary.light',
              fontSize: '13px',
              letterSpacing: '2.5px',
              '&:hover': {
                color: `${dark ? '#90a4d4' : 'secondary.main'}`,
                bgcolor: 'transparent',
              },
            }}
            onClick={toggleDarkMode}
          >
            {dark ? 'LIGHT' : 'DARK'}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
