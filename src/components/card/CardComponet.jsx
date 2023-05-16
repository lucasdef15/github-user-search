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
import DataContext from '../../contexts/UserContext';
import { useContext } from 'react';

export default function CardComponent() {
  const { data, formatDate } = useContext(DataContext);

  const theme = useTheme();

  const hasAllInfo = data ? Boolean(
    data.location || data.company || data.twitter_username || data.blog
  ) : true;

  console.log(hasAllInfo);

  return (
    <Paper
      sx={{
        py: { xs: 5, md: 6 },
        px: { xs: 3, sm: 6 },
        borderRadius: theme.shapes.borderRadius,
        bgcolor: 'darkPrimary.light',
      }}
    >
      <Grid container spacing={{ xs: 1, sm: 3 }} justifyContent='flex-end'>
        <Grid
          container
          item
          xs={12}
          spacing={{ xs: 7, sm: 15, md: 3 }}
          alignItems={{ sm: 'flex-end', md: 'flex-start' }}
        >
          <Grid item xs={3} md={3}>
            <Avatar
              alt='avatar'
              src={data ? data.avatar_url : catAvatar}
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
          <Grid item xs={9} md={9}>
            <Stack
              direction={{ md: 'row' }}
              sx={{ flexWrap: 'wrap' }}
              justifyContent='space-between'
              spacing={{ xs: 0.5, sm: 0.3 }}
            >
              <Stack spacing={{ sm: 1.5 }}>
                <Typography
                  variant='h1'
                  color='darkPrimary.main'
                  sx={{ fontSize: { xs: '1rem', sm: '1.625rem' } }}
                >
                  {data ? data.name : 'The Octocat'}
                </Typography>
                <Link
                  href={data ? data.html_url : '#'}
                  target='_blank'
                  underline='hover'
                  variant='h3'
                  color='primary.main'
                  sx={{ fontSize: { xs: '1rem', sm: '1rem' } }}
                >
                  {data ? `@${data.login}` : '@octocat'}
                </Link>
              </Stack>
              <Typography
                color='secondary.dark'
                sx={{ fontSize: { xs: '.813rem', sm: '.938rem' } }}
              >
                {data ? formatDate(data.created_at) : 'Joined 25 Jan 2011'}
              </Typography>
            </Stack>
            <Grid
              item
              md={12}
              sx={{ mt: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <Typography
                color={`${
                  data
                    ? data.bio === null
                      ? 'secondary.light'
                      : 'secondary.dark'
                    : 'secondary.light'
                }`}
                sx={{
                  fontSize: {
                    xs: '.813rem',
                    sm: '.938rem',
                  },
                }}
              >
                {data
                  ? data.bio === null
                    ? 'This profile has no bio'
                    : data.bio
                  : 'This profile has no bio'}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          sx={{ mt: { xs: 3, sm: 0 }, display: { md: 'none' } }}
        >
          <Typography
            color={`${
              data
                ? data.bio === null
                  ? 'secondary.light'
                  : 'secondary.dark'
                : 'secondary.light'
            }`}
            sx={{
              fontSize: {
                xs: '.813rem',
                sm: '.938rem',
              },
            }}
          >
            {data
              ? data.bio === null
                ? 'This profile has no bio'
                : data.bio
              : 'This profile has no bio'}
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Stack
            direction='row'
            justifyContent={{ xs: 'center', sm: 'flex-start' }}
            alignItems='center'
            spacing={{ xs: 4, sm: 12, md: 10 }}
            sx={{
              px: 5,
              py: 2,
              my: { xs: 1, sm: 0, md: 1 },
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
                color='darkPrimary.main'
                sx={{ fontSize: { xs: '1rem', sm: '1.375rem' } }}
              >
                {data ? data.public_repos : 8}
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
                color='darkPrimary.main'
                sx={{ fontSize: { xs: '1rem', sm: '1.375rem' } }}
              >
                {data ? data.followers : 3938}
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
                color='darkPrimary.main'
                sx={{ fontSize: { xs: '1rem', sm: '1.375rem' } }}
              >
                {data ? data.following : 9}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {hasAllInfo && (
          <Grid item xs={12} md={9}>
            <Grid
              container
              justifyContent='space-between'
              alignItems='center'
              spacing={{ sm: 0.5 }}
            >
              <Grid item xs={12} sm={5}>
                <Button
                  sx={{
                    color: `${
                      data
                        ? data.location === null
                          ? 'secondary.light'
                          : 'secondary.main'
                        : 'secondary.main'
                    }`,
                  }}
                  startIcon={<MdLocationOn />}
                >
                  <Typography sx={{ fontSize: { xs: '.813', sm: '.938rem' } }}>
                    {data
                      ? data.location === null
                        ? 'Not Available'
                        : data.location
                      : 'San Francisco'}
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Button
                  sx={{
                    color: `${
                      data
                        ? data.twitter_username === null
                          ? 'secondary.light'
                          : 'secondary.main'
                        : 'secondary.light'
                    }`,
                  }}
                  startIcon={<BsTwitter />}
                >
                  <Typography sx={{ fontSize: { xs: '.813', sm: '.938rem' } }}>
                    {data
                      ? data.twitter_username === null
                        ? 'Not Available'
                        : data.twitter_username
                      : 'Not Available'}
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Button
                  sx={{
                    color: `${
                      data
                        ? data.blog === ''
                          ? 'secondary.light'
                          : 'secondary.main'
                        : 'secondary.main'
                    }`,
                  }}
                  startIcon={<BsLink45Deg />}
                >
                  <Link
                    href={data ? data.blog : '#'}
                    target='_blank'
                    underline='hover'
                    variant='h3'
                    color='inherit'
                    sx={{
                      fontSize: {
                        xs: '.813',
                        sm: '.938rem',
                      },
                    }}
                  >
                    {data
                      ? data.blog === '' || data.blog === null
                        ? 'Not Available'
                        : data.blog
                      : 'https://github.blog'}
                  </Link>
                </Button>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Button
                  sx={{
                    color: `${
                      data
                        ? data.company === null
                          ? 'secondary.light'
                          : 'secondary.main'
                        : 'secondary.main'
                    }`,
                  }}
                  startIcon={<BsFillBuildingsFill />}
                >
                  <Typography
                    color='inherit'
                    sx={{
                      fontSize: {
                        xs: '.813',
                        sm: '.938rem',
                      },
                    }}
                  >
                    {data
                      ? data.company === null || data.company.length === 0
                        ? 'Not Available'
                        : data.company.length >= 12
                        ? `${data.company.slice(0, 11)}...`
                        : data.company
                      : '@github'}
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
