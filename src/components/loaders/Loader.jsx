import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Grid } from '@mui/material';

export default function Loader() {
  return (
    <Grid container spacing={[1, 3]} justifyContent='flex-end'>
      <Grid
        container
        item
        xs={12}
        justifyContent='space-between'
        sx={{ width: '730px' }}
      >
        <Grid item xs={3} md={3}>
          <Skeleton variant='circular' width={117} height={117} />
        </Grid>
        <Grid
          item
          container
          justifyContent={{ xs: 'flex-end', sm: 'space-between' }}
          xs={9}
          md={9}
        >
          <Grid item xs={8} sm={5}>
            <Skeleton variant='text' sx={{ fontSize: '2rem' }} />
            <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
          </Grid>
          <Grid item xs={8} sm={5}>
            <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
          </Grid>

          <Grid item xs={8} sm={12}>
            <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
          </Grid>
          <Grid item xs={8} sm={12}>
            <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sx={{ mt: { xs: 3, sm: 0 }, display: { md: 'none' } }}>
        <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
      </Grid>

      <Grid item xs={12} md={9}>
        <Skeleton variant='rounded' height={80} />
      </Grid>

      <Grid
        item
        container
        justifyContent='space-between'
        alignItems='center'
        spacing={1}
        xs={12}
        md={9}
      >
        <Grid item xs={12} sm={6}>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </Grid>
      </Grid>
    </Grid>
  );
}
