import React from 'react';

import { Formik } from 'formik';
import UserManageForm from './UserManageForm';

import { userManageInitState } from './mock';
import { userManageSchema } from './schema';

import './style.css';

const UserManage = ({ submit, id, ...props }) => (
  <div className="user-manage_wrapper">
    <Formik
      initialValues={id ? props : userManageInitState}
      validationSchema={userManageSchema}
      onSubmit={(values) => submit(values)}
      enableReinitialize
    >
      {(props) => <UserManageForm {...props} />}
    </Formik>
  </div>
);

export default UserManage;
