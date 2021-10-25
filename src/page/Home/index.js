import React, { useContext, useEffect, useState } from 'react';

import UserList from '../../components/UserList';
import PreloadBlock from '../../sharedComponents/PreloadBlock';
import RedirectButton from '../../sharedComponents/RedirectButton';

import API from '../../utils/services';
import { ErrorHandler } from '../../utils/context';

import './style.css';

const Home = () => {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const setError = useContext(ErrorHandler);

  const getUsersList = () => {
    setLoading((prev) => !prev);
    API.get(`/contact/`)
      .then(({ data }) => setUsersList(data))
      .catch(({ response }) => {
        setError(response.statusText);
      })
      .finally(() => setLoading((prev) => !prev));
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <div className="home_wrapper">
      <RedirectButton path={`/create_user`} label={`create user`} />
      {isLoading ? <PreloadBlock /> : <UserList userList={usersList} />}
    </div>
  );
};

export default Home;
