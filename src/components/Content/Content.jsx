import React from 'react';
import Magnifier from './components/Magnifier';
import PaginationBlock from './components/Pagination';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const StartScreenGrid = styled(Grid)`
  padding-top: 35vh;
  color: #808080;
`;

const UserImage = styled.img`
  height: 280px;
  border-radius: 50%;
`;

const MainGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: spase-between;
  align-items: center;
`;

const Content = ({ userInfo, showUserScreen, userRepositoryInfo }) => {
  const { name, login, html_url, avatar_url, followers, following, public_repos } = userInfo;

  const objectIsEmpty = (object) => {
  for (let element in object) {
    return false;
  }
  return true;
}
  return (
    showUserScreen
      ? (
        <MainGrid>
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            <UserImage src={avatar_url} alt={name} />
            <Typography>{name}</Typography>
            <Typography>
              <a href={html_url} target="_blanc">{login}</a>
            </Typography>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Typography>{followers} followers</Typography>
              <Typography>{following} following</Typography>
            </Grid>
          </Grid>
          <Grid>
            <Grid>Repositories ({public_repos})</Grid>
            {
              objectIsEmpty(userRepositoryInfo)
              ? (null)
              : <PaginationBlock userRepositoryInfo={userRepositoryInfo} public_repos={public_repos} />
            }
          </Grid>
        </MainGrid>
      )
      : (
        <StartScreenGrid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Magnifier />
          <Typography>Start with searching</Typography>
          <Typography>a GitHub user</Typography>
        </StartScreenGrid>
      )
  );
}

export default Content;
