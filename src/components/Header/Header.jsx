import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {
  StyledToolbar,
  StyledGitHubIcon,
  Search,
  SearhIconBlock,
} from './style';

const Header = ({ searchValue, handleSearchValue, onKeyPressHandler }) => {
  return (
    <div>
      <StyledToolbar>
        <a href="https://github.com/" target="_blanc">
          <StyledGitHubIcon fontSize="large" />
        </a>
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
            style={{ background: '#FFF' }}
          />
        </Search>
      </StyledToolbar>
    </div>
  );
};

export default Header;
