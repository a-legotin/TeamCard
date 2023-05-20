import { Box, styled, Tooltip } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo_full from '../../assets/logo-transparent.png';

const LogoFullWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
`
);

function LogoFull() {
  return (
    <LogoFullWrapper to="/">
      <img src={logo_full} alt="TeamCard" height={48} />
    </LogoFullWrapper>
  );
}

export default LogoFull;
