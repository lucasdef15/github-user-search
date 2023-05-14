import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Icon from '@mui/material/IconButton';
import { CiSearch } from 'react-icons/ci';
import { Button, useTheme } from '@mui/material';

export default function CustomizedInputBase() {
  const theme = useTheme();

  return (
    <Paper
      component='form'
      sx={{
        p: '8px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.shapes.borderRadius,
        boxShadow: '0 15px 15px rgba(150, 146, 146, 0.116)',
      }}
    >
      <Icon
        sx={{
          mr: { xs: '0', sm: '15px' },
          ml: { xs: '0', sm: '25px' },
          p: 0,
          cursor: 'default',
          '& svg': {
            width: { xs: '28px', sm: '33px' },
            height: { xs: '28px', sm: '33px' },
          },
        }}
        color='primary'
        size='large'
      >
        <CiSearch />
      </Icon>
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
        }}
        placeholder='Search GitHub username...'
        inputProps={{ 'aria-label': 'search github username' }}
      />
      <Button
        variant='contained'
        sx={{
          px: { xs: 1.89, sm: 2.8 },
          py: 1.4,
          borderRadius: theme.shapes.borderRadius,
        }}
      >
        Search
      </Button>
    </Paper>
  );
}
