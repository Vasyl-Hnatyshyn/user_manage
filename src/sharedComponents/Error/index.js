import React, { memo } from 'react';
import './style.css';

const Error = memo(({ message = '' }) => <div className="feedback">{message}</div>);

export default Error;
