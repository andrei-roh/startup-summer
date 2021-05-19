import React from 'react';
import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import GitHubIcon from '@material-ui/icons/GitHub';
import SearchIcon from '@material-ui/icons/Search';

const StyledToolbar = styled(Toolbar)`
  background: #0064EB;
`;

const StyledGitHubIcon = styled(GitHubIcon)`
  margin-left: 20px;
  font-size: 40px;
  color: #FFF;
`;

const Search = styled.div`
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

function Header() {
  return (
    <div>
      <StyledToolbar>
        <StyledGitHubIcon fontSize="large" />
          <Search>
            <SearhIconBlock>
              <SearchIcon />
            </SearhIconBlock>
            <InputBase
              placeholder="Enter GitHub username"
            />
        </Search>
      </StyledToolbar>
    </div>
  );
}

export default Header;
