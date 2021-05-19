import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
// import getUser from '../api/getUser';

const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchValue = (element) => {
    setSearchValue(element.target.value)
  }
  let [userInfo, getUserInfo] = useState({});
  let [userRepositoryInfo, getUserRepositoryInfo] = useState({});
  let [showUserScreen, setShowUserScreen] = useState(false);
  const onKeyPressHandler = async (event) => {
    event.preventDefault();
    setShowUserScreen(!showUserScreen);
    const URL = "https://api.github.com/users";
    await fetch(`${URL}/${searchValue}`)
    .then(
      function(response) {
    		return response.json();
    	}
    )
    .then(
    	function(respData) {
    		getUserInfo(respData);
    	}
    )
    await fetch(`${URL}/${searchValue}/repos`)
    .then(
      function(response) {
        return response.json();
      }
    )
    .then(
      function(respData) {
        getUserRepositoryInfo(respData);
      }
    )
}

useEffect(() => {
  console.log(userInfo, userRepositoryInfo)
}, [userInfo, userRepositoryInfo]);

  return (
    <div>
      <Header
        searchValue={searchValue}
        handleSearchValue={handleSearchValue}
        onKeyPressHandler={onKeyPressHandler}
      />
      <Content
        userInfo={userInfo}
        userRepositoryInfo={userRepositoryInfo}
        showUserScreen={showUserScreen}
      />
    </ div>
  );
}

export default Main;
