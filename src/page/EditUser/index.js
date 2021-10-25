import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { ErrorHandler } from '../../utils/context';
import API from '../../utils/services';

import UserManage from '../../components/UserManage';
import PreloadBlock from '../../sharedComponents/PreloadBlock';

import './style.css';

const EditUser = () => {
  const { id } = useParams();
  const history = useHistory();
  const setError = useContext(ErrorHandler);

  const [userItem, setUserItem] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getUser = () => {
    setLoading((prev) => !prev);
    API.get(`/contact/${id}/`)
      .then(({ data }) => setUserItem(data))
      .catch(({ response }) => {
        setError(response.statusText);
      })
      .finally(() => setLoading((prev) => !prev));
  };

  const editUser = (data) => {
    setLoading((prev) => !prev);
    API.put(`/contact/${id}/`, data)
      .then(() => history.push(`/user/${id}`))
      .catch(({ response }) => {
        setError(response.statusText);
      })
      .finally(() => setLoading((prev) => !prev));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="user_info_wrapper">
      {isLoading ? <PreloadBlock /> : <UserManage submit={editUser} id={id} {...userItem} />}
    </div>
  );
};

export default EditUser;
