import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LogoFull from 'src/components/LogoFull';
import { Link as RouterLink } from 'react-router-dom';
import PokerCard from 'src/components/PokerCard';
import { Box, Stack } from '@mui/material';

export default function HomeRoot() {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'nowrap' }}>
          <LogoFull />
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} />
          <Button
            component={RouterLink}
            to="/dashboards/overview"
            size="medium"
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Box>
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid xs={'auto'}>
            <Container
              disableGutters
              maxWidth="sm"
              component="main"
              sx={{ pt: 8, pb: 6 }}
            >
              <Typography
                component="h1"
                variant="h1"
                align="left"
                color="text.primary"
                gutterBottom
              >
                TeamCard
              </Typography>
              <Typography variant="h4" align="left" color="text.secondary" component="p">
                Open-source poker planning for your team.
              </Typography>
            </Container>
            <Stack spacing={2} direction="row">
              <Button
                component={RouterLink}
                to="/rooms/new"
                size="large"
                variant="contained"
                disableElevation
              >
                Play now
              </Button>

              <Button
                component={RouterLink}
                to="/dashboards/overview"
                size="large"
                variant="outlined"
                disableElevation
              >
                Dashboard
              </Button>
            </Stack>
          </Grid>
          <Grid xs={'auto'}>
            <Container maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
              <PokerCard />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
