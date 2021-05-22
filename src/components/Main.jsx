import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Spinner from './Spinner/Spinner';
import Empty from './Empty/Empty';

const Main = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchValue = (element) => {
    setSearchValue(element.target.value);
  };
  let [userInfo, getUserInfo] = useState({});
  let [userRepositoryInfo, getUserRepositoryInfo] = useState([]);
  let [showUserScreen, setShowUserScreen] = useState(false);
  let [showSpinner, setShowSpinner] = useState(false);
  let [showEmptyUser, setShowEmptyUser] = useState(false);

  const onKeyPressHandler = async (event) => {
    setShowSpinner(!showSpinner);
    setShowEmptyUser((showEmptyUser = false));
    getUserRepositoryInfo([]);
    let repositoryPages = 0;
    event.preventDefault();
    const URL = 'https://api.github.com/users';
    await fetch(`${URL}/${searchValue}`)
      .then(function (response) {
        if (response.status === 404) {
          setShowEmptyUser((showEmptyUser = true));
        }
        return response.json();
      })
      .then(function (respData) {
        getUserInfo(respData);
        repositoryPages = Math.ceil(respData.public_repos / 100);
      });
    for (let i = 0; i < repositoryPages; i += 1) {
      await fetch(`${URL}/${searchValue}/repos?per_page=100&page=${i}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (respData) {
          getUserRepositoryInfo((prevState) => [...prevState, ...respData]);
        });
    }
    setShowUserScreen((showUserScreen = true));
    setShowSpinner((showSpinner = false));
  };

  useEffect(() => {}, [userInfo, userRepositoryInfo]);

  return (
    <div>
      <Header
        searchValue={searchValue}
        handleSearchValue={handleSearchValue}
        onKeyPressHandler={onKeyPressHandler}
      />
      {showSpinner ? (
        <Spinner />
      ) : showEmptyUser ? (
        <Empty />
      ) : (
        <Content
          userInfo={userInfo}
          userRepositoryInfo={userRepositoryInfo}
          showUserScreen={showUserScreen}
        />
      )}
    </div>
  );
};

export default Main;
