import React from 'react';
import StartScreen from './components/StartScreen/StartScreen';
import PaginationBlock from './components/Pagination/Pagination';
import EmptyRepository from './components/EmptyRepository/EmptyRepository';
import Grid from '@material-ui/core/Grid';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import {
  UserImage,
  MainGrid,
  LeftGrid,
  RepositoryLink,
  SubscriptionsBlock,
  FollowBlock,
  FollowTextBlock,
} from './style';

const Content = ({ userInfo, showUserScreen, userRepositoryInfo }) => {
  const {
    name,
    login,
    html_url,
    avatar_url,
    followers,
    following,
    public_repos,
  } = userInfo;

  const objectIsEmpty = (object) => {
    for (let element in object) {
      return false;
    }
    return true;
  };
  return showUserScreen ? (
    <MainGrid>
      <LeftGrid>
        <UserImage src={avatar_url} alt={name} />
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Typography>
          <RepositoryLink href={html_url} target="_blanc">
            {login}
          </RepositoryLink>
        </Typography>
        <SubscriptionsBlock>
          <FollowBlock>
            <PeopleIcon style={{ color: '#808080' }} />
            <FollowTextBlock>{followers} followers</FollowTextBlock>
          </FollowBlock>
          <FollowBlock>
            <PersonIcon style={{ color: '#808080' }} />
            <FollowTextBlock>{following} following</FollowTextBlock>
          </FollowBlock>
        </SubscriptionsBlock>
      </LeftGrid>
      <Grid>
        {objectIsEmpty(userRepositoryInfo) ? (
          <EmptyRepository />
        ) : (
          <PaginationBlock
            userRepositoryInfo={userRepositoryInfo}
            public_repos={public_repos}
          />
        )}
      </Grid>
    </MainGrid>
  ) : (
    <StartScreen />
  );
};

export default Content;
