import React, { useState, useEffect } from 'react';
import { getUserInformation } from './utils/getUserInformation';
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
    setShowEmptyUser(false);
    getUserRepositoryInfo([]);
    let repositoryPages = 0;
    event.preventDefault();

    await getUserInformation(
      setShowEmptyUser,
      searchValue,
      getUserInfo,
      repositoryPages,
      getUserRepositoryInfo
    );

    setShowUserScreen(true);
    setShowSpinner(false);
  };

  useEffect(() => {}, [userInfo, userRepositoryInfo]);

  return (
    <>
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
    </>
  );
};

export default Main;
