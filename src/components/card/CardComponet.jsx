import {
  Paper,
  Grid,
  Typography,
  Avatar,
  Link,
  Stack,
  Button,
} from '@mui/material';
import catAvatar from '../../assets/octocat.svg';
import { useTheme } from '@mui/material/styles';
import { MdLocationOn } from 'react-icons/md';
import { BsLink45Deg } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFillBuildingsFill } from 'react-icons/bs';

export default function CardComponent() {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        py: 5,
        px: { xs: 3, sm: 5 },
        borderRadius: theme.shapes.borderRadius,
      }}
    >
      <Grid container spacing={{ xs: 1, sm: 3 }}>
        <Grid container item xs={12}>
          <Grid item xs={4}>
            <Avatar
              alt='avatar'
              src={catAvatar}
              sx={{
                width: { xs: '70px', sm: '117px' },
                height: { xs: '70px', sm: '117px' },
                bgcolor: '#e7eef8',
                '& img': {
                  objectFit: 'contain',
                },
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Stack>
              <Typography
                variant='h1'
                sx={{ fontSize: { xs: '1rem', sm: '1.625rem' } }}
              >
                The Octocat
              </Typography>
              <Link
                href='#'
                underline='hover'
                variant='h3'
                color='primary.main'
                sx={{ fontSize: { xs: '1rem', sm: '1rem' } }}
              >
                @octocat
              </Link>
              <Typography
                color='secondary.light'
                sx={{ fontSize: { xs: '.813rem', sm: '.938rem' } }}
              >
                Joined 25 Jan 2011
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ mt: { xs: 3, sm: 0 } }}>
          <Typography
            color='secondary.light'
            sx={{ fontSize: { xs: '.813rem', sm: '.938rem' } }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </Typography>
        </Grid>

        <Grid item xs={0} md={3} />

        <Grid item xs={12} md={9}>
          <Stack
            direction='row'
            justifyContent={{ xs: 'center', sm: 'flex-start' }}
            alignItems='center'
            spacing={{ xs: 4, sm: 12 }}
            sx={{
              px: 4,
              py: 2,
              my: { xs: 1, sm: 0 },
              boxShadow: 'none',
              bgcolor: 'lightPrimary.main',
              borderRadius: theme.shapes.borderRadius,
            }}
          >
            <Stack
              justifyContent='center'
              alignItems={{ xs: 'center', sm: 'flex-start' }}
            >
              <Typography
                variant='h4'
                color='secondary.main'
                sx={{ fontSize: { xs: '.688rem', sm: '.819rem' } }}
              >
                Repos
              </Typography>
              <Typography
                variant='h2'
                sx={{ fontSize: { xs: '1rem', sm: '1.375rem' } }}
              >
                8
              </Typography>
            </Stack>
            <Stack
              justifyContent='center'
              alignItems={{ xs: 'center', sm: 'flex-start' }}
            >
              <Typography
                variant='h4'
                color='secondary.main'
                sx={{ fontSize: { xs: '.688rem', sm: '.819rem' } }}
              >
                Followers
              </Typography>
              <Typography
                variant='h2'
                sx={{ fontSize: { xs: '1rem', sm: '1.375rem' } }}
              >
                3938
              </Typography>
            </Stack>
            <Stack
              justifyContent='center'
              alignItems={{ xs: 'center', sm: 'flex-start' }}
            >
              <Typography
                variant='h4'
                color='secondary.main'
                sx={{ fontSize: { xs: '.688rem', sm: '.819rem' } }}
              >
                Following
              </Typography>
              <Typography
                variant='h2'
                sx={{ fontSize: { xs: '1rem', sm: '1.375rem' } }}
              >
                9
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={0} md={3} />

        <Grid
          item
          container
          xs={12}
          sm={5}
          justifyContent='space-between'
          alignItems='center'
          spacing={{ md: 1 }}
        >
          <Grid item xs={12} sm={5}>
            <Button color='secondary' startIcon={<MdLocationOn />}>
              <Typography sx={{ fontSize: { xs: '.813', sm: '.938rem' } }}>
                San Francisco
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Button color='secondary' startIcon={<BsTwitter />}>
              <Typography sx={{ fontSize: { xs: '.813', sm: '.938rem' } }}>
                Not Available
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Button color='secondary' startIcon={<BsLink45Deg />}>
              <Typography sx={{ fontSize: { xs: '.813', sm: '.938rem' } }}>
                https://github.blog
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Button color='secondary' startIcon={<BsFillBuildingsFill />}>
              <Typography sx={{ fontSize: { xs: '.813', sm: '.938rem' } }}>
                @github
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
