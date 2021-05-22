import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';

export const StyledToolbar = styled(Toolbar)`
  background: #0064eb;
  height: 15vh;

  @media (max-width: 800px) {
    height: 30px;
  }
`;

export const StyledGitHubIcon = styled(GitHubIcon)`
  margin-left: 20px;
  font-size: 40px;
  color: #fff;
  background: #0064eb;
`;

export const Search = styled.form`
  display: flex;
  background: #fff;
  border-radius: 5px;
  width: 500px;
  height: 40px;
  margin-left: 20px;
`;

export const SearhIconBlock = styled.div`
  margin-left: 14px;
  margin-right: 10px;
  height: 100%;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #808080;
  background: #fff;
`;
