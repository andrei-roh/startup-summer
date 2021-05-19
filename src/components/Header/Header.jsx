import React from 'react';
import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import GitHubIcon from '@material-ui/icons/GitHub';
import SearchIcon from '@material-ui/icons/Search';
import { getUserInfo, getUserRepositoryInfo } from '../../api/user';

const StyledToolbar = styled(Toolbar)`
  background: #0064EB;
`;

const StyledGitHubIcon = styled(GitHubIcon)`
  margin-left: 20px;
  font-size: 40px;
  color: #FFF;
`;

const Search = styled.form`
  display: flex;
  background: #FFF;
  border-radius: 5px;
  width: 500px;
  height: 40px;
  margin-left: 20px;
`;

const SearhIconBlock = styled.div`
  margin-left: 14px;
  margin-right: 10px;
  height: 100%;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #808080;
`;

const Header = ({ searchValue, handleSearchValue }) => {
  const onKeyPressHandler = (event) => {
    event.preventDefault()
    return (getUserInfo(searchValue), getUserRepositoryInfo(searchValue))
  }
  return (
    <div>
      <StyledToolbar>
        <StyledGitHubIcon fontSize="large" />
          <Search onSubmit={onKeyPressHandler}>
            <SearhIconBlock>
              <SearchIcon />
            </SearhIconBlock>
            <InputBase
              placeholder="Enter GitHub username"
              autoFocus={true}
              type="text"
              value={searchValue}
              onChange={handleSearchValue}
            />
        </Search>
      </StyledToolbar>
    </div>
  );
}

export default Header;
