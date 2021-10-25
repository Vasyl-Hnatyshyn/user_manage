import React, { memo } from 'react';
import './style.css';

const Select = memo(({ label_style, label, list, ...props }) => (
  <label className={label_style}>
    {label}
    <select {...props} className="form_field">
      {list.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  </label>
));

export default Select;
