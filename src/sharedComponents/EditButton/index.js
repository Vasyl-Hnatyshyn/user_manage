import React, { memo } from 'react';
import './style.css';

const EditButton = memo(({ label, callBack, type = 'button' }) => (
  <button className="edit_button" type={type} onClick={callBack}>
    {label}
  </button>
));

export default EditButton;
