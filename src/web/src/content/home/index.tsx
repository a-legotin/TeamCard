import { Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import HomeRoot from './root/HomeRoot';

function Overview() {
  return (
    <>
      <Helmet>
        <title>TeamCard</title>
      </Helmet>
      <Container maxWidth={false}>
        <HomeRoot />
      </Container>
    </>
  );
}

export default Overview;
