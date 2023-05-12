import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import iconSearch from '../../assets/icon-search.svg';
import { Box, Button } from '@mui/material';

export default function CustomizedInputBase() {
  return (
    <Paper
      component='form'
      sx={{
        p: '8px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
      }}
    >
      <IconButton sx={{ pr: '15px', pl: '25px' }} aria-label='menu'>
        <Box component='img' src={iconSearch} alt='search' />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search GitHub Username...'
        inputProps={{ 'aria-label': 'search github username' }}
      />
      <Button variant='contained' sx={{ px: 2.8, py: 1.4 }}>
        Search
      </Button>
    </Paper>
  );
}
