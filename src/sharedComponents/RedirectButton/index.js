import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const RedirectButton = memo(({ path, label }) => (
  <button className="redirect_button">
    <Link to={path}>{label}</Link>
  </button>
));

export default RedirectButton;
