import React from 'react';
import { Link } from 'react-router-dom';

import UserItem from '../../sharedComponents/UserItem';

import './style.css';

const UserList = ({ userList = [] }) => (
  <div className="user-list_wrapper">
    {userList.map(({ id, ...item }) => (
      <Link key={id} to={`/user/${id}`}>
        <UserItem {...item} />
      </Link>
    ))}
  </div>
);

export default UserList;
