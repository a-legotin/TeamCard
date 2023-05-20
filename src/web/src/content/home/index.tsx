import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import HomeRoot from './root';

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
