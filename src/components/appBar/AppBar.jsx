import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import iconMoon from '../../assets/icon-moon.svg';
import { Stack } from '@mui/material';

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
          <Typography variant='h1' component='div' sx={{ flexGrow: 1 }}>
            devfinder
          </Typography>
          <Stack direction='row' spacing={2}>
            <Typography variant='h4' color='secondary.light'>
              DARK
            </Typography>
            <img src={iconMoon} alt='moon' />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
