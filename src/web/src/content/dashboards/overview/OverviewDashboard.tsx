import { Helmet } from 'react-helmet-async';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

function DashboardOverview() {
  return (
    <>
      <Helmet>
        <title>Overview</title>
      </Helmet>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        ></Grid>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardOverview;
