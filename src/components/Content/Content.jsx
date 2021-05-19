import React from 'react';
import Magnifier from './components/Magnifier';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const StyledGrid = styled(Grid)`
  padding-top: 40vh;
  color: #808080;
`;

function Content() {
  return (
    <StyledGrid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Magnifier />
      <Typography>Start with searching</Typography>
      <Typography>a GitHub user</Typography>
    </StyledGrid>
  );
}

export default Content;
