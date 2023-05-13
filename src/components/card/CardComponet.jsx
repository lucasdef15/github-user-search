import {
  Paper,
  Grid,
  Typography,
  Avatar,
  Link,
  Stack,
  SvgIcon,
} from '@mui/material';
import catAvatar from '../../assets/octocat.svg';
import { useTheme } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import iconLocation from '../../assets/icon-location.svg';
import iconTwitter from '../../assets/icon-twitter.svg';
import iconCompany from '../../assets/icon-company.svg';
import iconWebsite from '../../assets/icon-website.svg';

export default function CardComponent() {
  const theme = useTheme();
  return (
    <Paper sx={{ p: 5, borderRadius: '15px' }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Avatar
            alt='avatar'
            src={catAvatar}
            sx={{
              width: 117,
              height: 117,
              bgcolor: '#e7eef8',
              '& img': {
                objectFit: 'contain',
              },
            }}
          />
        </Grid>

        <Grid container item xs={9} spacing={2.5}>
          <Grid item xs={7}>
            <Typography variant='h1'>The Octocat</Typography>
            <Link href='#' underline='hover' variant='h3' color='primary.main'>
              @octocat
            </Link>
          </Grid>
          <Grid item xs={5}>
            <Typography color='secondary.light'>Joined 25 Jan 2011</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color='secondary.light'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={3} />

        <Grid item xs={9}>
          <Paper
            sx={{
              px: 4,
              py: 2,
              my: 1,
              boxShadow: 'none',
              bgcolor: 'lightPrimary.main',
              borderRadius: theme.shapes.borderRadius,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Stack justifyContent='center' alignItems='flex-start'>
                  <Typography variant='h4' color='secondary.main'>
                    Repos
                  </Typography>
                  <Typography variant='h2'>8</Typography>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack justifyContent='center' alignItems='flex-start'>
                  <Typography variant='h4' color='secondary.main'>
                    Followers
                  </Typography>
                  <Typography variant='h2'>3938</Typography>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack justifyContent='center' alignItems='flex-start'>
                  <Typography variant='h4' color='secondary.main'>
                    Following
                  </Typography>
                  <Typography variant='h2'>9</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={3} />

        <Grid item xs={9}></Grid>
      </Grid>
    </Paper>
  );
}
