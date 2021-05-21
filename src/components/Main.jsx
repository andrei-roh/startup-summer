import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Content from './Content/Content';

const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchValue = (element) => {
    setSearchValue(element.target.value)
  }
  let [userInfo, getUserInfo] = useState({});
  let [userRepositoryInfo, getUserRepositoryInfo] = useState([]);
  let [showUserScreen, setShowUserScreen] = useState(false);
  const onKeyPressHandler = async (event) => {
    getUserRepositoryInfo([]);
    let repositoryPages = 0;
    event.preventDefault();
    setShowUserScreen(showUserScreen = true);
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
        repositoryPages = Math.ceil(respData.public_repos / 100);
    	}
    )
    for (let i = 0; i < repositoryPages; i += 1) {
      await fetch(`${URL}/${searchValue}/repos?per_page=100&page=${i}`)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(respData) {
          getUserRepositoryInfo((prevState) => ([...prevState, ...respData]));
        }
      )
    }
}

useEffect(() => {}, [userInfo, userRepositoryInfo]);

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
    </div>
  );
}

export default Main;
