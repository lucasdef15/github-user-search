import { Typography, Button, Toolbar, Box, AppBar } from '@mui/material';
import { RiMoonFill } from 'react-icons/ri';

export default function ButtonAppBar() {
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
            sx={{ flexGrow: 1, fontSize: '1.625rem' }}
          >
            devfinder
          </Typography>
          <Button
            endIcon={<RiMoonFill />}
            size='large'
            sx={{
              color: 'secondary.light',
              fontSize: '13px',
              letterSpacing: '2.5px',
              '&:hover': {
                color: 'black',
                bgcolor: 'transparent',
              },
            }}
          >
            DARK
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
