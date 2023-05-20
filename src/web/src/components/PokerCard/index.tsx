import { Box, styled, Tooltip } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import card from '../../assets/poker-card.svg';

const LogoFullWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: block;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
`
);

function PokerCard() {
  return (
    <LogoFullWrapper to="/">
      <img src={card} alt="Card" height={256} />
    </LogoFullWrapper>
  );
}

export default PokerCard;
