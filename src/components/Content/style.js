import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const StartScreenGrid = styled(Grid)`
  padding-top: 35vh;
  color: #808080;
  background: #e5e5e5;
`;

export const UserImage = styled.img`
  height: 280px;
  border-radius: 50%;
  padding-bottom: 18px;
`;

export const MainGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  background: #e5e5e5;
  height: 85vh;
  padding-top: 5vh;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 799px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LeftGrid = styled(Grid)`
  margin-left: 50px;
  padding-right: 80px;
  height: 50vh;

  @media (max-width: 799px) {
    margin-left: 0px;
    padding-right: 0px;
    padding-bottom: 25px;
  }
`;

export const RepositoryLink = styled.a`
  text-decoration: none;
  color: #0064eb;
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

export const FollowTextBlock = styled.span`
  padding: 2px 2px 2px 10px;
`;
