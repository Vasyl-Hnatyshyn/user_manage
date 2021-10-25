import React from 'react';
import RedirectButton from '../../sharedComponents/RedirectButton';
import EditButton from '../../sharedComponents/EditButton';

import './style.css';

const ButtonPanel = ({ id, deleteUser }) => (
  <div className="btn_panel-wrapper">
    {id && (
      <>
        <EditButton callBack={() => deleteUser(id)} label={`delete`} />
        <RedirectButton path={`/edit/${id}`} label={`edit`} />
      </>
    )}
  </div>
);

export default ButtonPanel;
