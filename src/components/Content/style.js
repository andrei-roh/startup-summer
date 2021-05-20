import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const StartScreenGrid = styled(Grid)`
  padding-top: 35vh;
  color: #808080;
`;

export const UserImage = styled.img`
  height: 280px;
  border-radius: 50%;
  padding-bottom: 18px;
`;

export const MainGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: spase-between;
  align-items: center;
  background: #E5E5E5;
  height: 85vh;
  padding-top: 20px;
  box-sizing: border-box;
`;

export const LeftGrid = styled(Grid)`
  align-self: flex-start;
  margin-left: 50px;
  padding-right: 80px;
`;

export const RepositoryLink = styled.a`
  text-decoration: none;
  color: #0064EB;
`;

export const SubscriptionsBlock = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 25px;
`;

export const FollowBlock = styled(Typography)`
  display: flex;
  flex-direction: row;
`;

export const FollowTextBlock = styled.div`
  padding: 2px 2px 2px 10px;
`;
