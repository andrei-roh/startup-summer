import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {
  Input,
  StyledToolbar,
  StyledGitHubIcon,
  Search,
  SearhIconBlock,
} from './style';

const Header = ({ searchValue, handleSearchValue, onKeyPressHandler }) => {
  return (
    <>
      <StyledToolbar disableGutters={true}>
        <a href="https://github.com/" target="_blanc">
          <StyledGitHubIcon fontSize="large" />
        </a>
        <Search onSubmit={onKeyPressHandler}>
          <SearhIconBlock>
            <SearchIcon />
          </SearhIconBlock>
          <Input
            placeholder="Enter GitHub username"
            autoFocus={true}
            type="text"
            value={searchValue}
            onChange={handleSearchValue}
            style={{ background: '#FFF' }}
          />
        </Search>
      </StyledToolbar>
    </>
  );
};

export default Header;
