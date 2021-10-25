import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { ErrorHandler } from '../../utils/context';
import API from '../../utils/services';

import UserManage from '../../components/UserManage';
import PreloadBlock from '../../sharedComponents/PreloadBlock';

import './style.css';

const CreateUser = () => {
  const [isLoading, setLoading] = useState(false);

  const history = useHistory();
  const setError = useContext(ErrorHandler);

  const createUser = (data) => {
    setLoading((prev) => !prev);
    API.post(`/contact/`, data)
      .then(({ data }) => data.id && history.push(`/`))
      .catch(({ response }) => {
        setError(response.statusText);
      })
      .finally(() => setLoading((prev) => !prev));
  };

  return (
    <div className="user_info_wrapper">
      {isLoading ? <PreloadBlock /> : <UserManage submit={createUser} />}
    </div>
  );
};

export default CreateUser;
