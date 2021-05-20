import React from 'react';
import Magnifier from './components/Magnifier';
import PaginationBlock from './components/Pagination';
import Grid from '@material-ui/core/Grid';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import {
  StartScreenGrid,
  UserImage,
  MainGrid,
  LeftGrid,
  RepositoryLink,
  SubscriptionsBlock,
  FollowBlock,
  FollowTextBlock
} from './style';

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
          <LeftGrid>
            <UserImage src={avatar_url} alt={name} />
            <Typography variant="h6" style={{ fontWeight: "bold" }}>{name}</Typography>
            <Typography>
              <RepositoryLink href={html_url} target="_blanc">{login}</RepositoryLink>
            </Typography>
            <SubscriptionsBlock>
              <FollowBlock>
                <PeopleIcon style={{ color: '#808080'}} />
                <FollowTextBlock>{followers} followers</FollowTextBlock>
              </FollowBlock>
              <FollowBlock>
                <PersonIcon style={{ color: '#808080'}} />
                <FollowTextBlock>{following} following</FollowTextBlock>
              </FollowBlock>
            </SubscriptionsBlock>
          </LeftGrid>
          <Grid>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>Repositories ({public_repos})</Typography>
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
