import React, { memo } from 'react';

import './style.css';

const TextArea = memo(({ label_style, label, rows = '5', cols = '30', ...props }) => (
  <label className={label_style}>
    {label}
    <textarea className="text_area" rows={rows} cols={cols} {...props}></textarea>
  </label>
));

export default TextArea;
