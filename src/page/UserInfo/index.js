import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { ErrorHandler } from '../../utils/context';
import API from '../../utils/services';

import PreloadBlock from '../../sharedComponents/PreloadBlock';
import ButtonPanel from '../../components/ButtonPannel';
import RedirectButton from '../../sharedComponents/RedirectButton';
import UserItem from '../../sharedComponents/UserItem';

import './style.css';

const UserInfo = () => {
  const history = useHistory();
  const setError = useContext(ErrorHandler);
  const { id } = useParams();

  const [userItem, setUsersItem] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getUser = () => {
    setLoading((prev) => !prev);
    API.get(`/contact/${id}/`)
      .then(({ data }) => setUsersItem(data))
      .catch(({ response }) => {
        setError(response.statusText);
      })
      .finally(() => setLoading((prev) => !prev));
  };

  const deleteUser = (id) => {
    API.delete(`/contact/${id}/`)
      .then(() => history.push(`/`))
      .catch(({ response }) => {
        setError(response.statusText);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="user_info_wrapper">
      <RedirectButton path={`/`} label={`home page`} />
      {isLoading ? <PreloadBlock /> : <UserItem {...userItem} />}
      <ButtonPanel id={id} deleteUser={deleteUser} />
    </div>
  );
};

export default UserInfo;
