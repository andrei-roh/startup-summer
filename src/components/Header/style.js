import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import InputBase from '@material-ui/core/InputBase';

export const StyledToolbar = styled(Toolbar)`
  background: #0064eb;
  height: 15vh;
  position: fixed;
  width: 100%;

  @media (max-width: 799px) {
    height: 30px;
  }

  @media (max-width: 374px) {
    a {
      display: none;
    }
  }
`;

export const StyledGitHubIcon = styled(GitHubIcon)`
  margin-left: 24px;
  font-size: 40px;
  color: #fff;
  background: #0064eb;

  @media (max-width: 799px) {
    margin-left: 16px;
  }

  @media (max-width: 424) {
    margin-left: 8px;
  }
`;

export const Search = styled.form`
  display: flex;
  background: #fff;
  border-radius: 5px;
  width: 500px;
  height: 40px;
  margin-left: 20px;

  @media (max-width: 767px) {
    width: 300px;
    margin-left: 10px;
  }

  @media (max-width: 374px) {
    width: 280px;
  }
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

export const Input = styled(InputBase)`
  width: 80%;
`;
