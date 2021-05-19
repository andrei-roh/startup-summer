import React, { useState } from 'react';
import Header from './Header/Header';
import Content from './Content/Content';

const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchValue = (element) => {
    setSearchValue(element.target.value)
  }
  const [userInfo, getUserInfo] = useState({});
  const handleUserInfo = (element) => {
    getUserInfo(element.target.value)
  }
  return (
    <div>
      <Header
        searchValue={searchValue}
        handleSearchValue={handleSearchValue}
        userInfo={userInfo}
        handleUserInfo={handleUserInfo}
      />
    <Content userInfo={userInfo} />
    </ div>
  );
}

export default Main;
