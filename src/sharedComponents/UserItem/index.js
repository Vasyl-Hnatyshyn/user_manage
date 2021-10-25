import React, { memo } from 'react';

import './style.css';

const UserItem = memo(({ is_active, id, ...props }) => (
  <div className="user_item_wrapper">
    {Object.keys(props).map((item, ndx) => {
      const user_info_label = item.replace('_', ' ');
      return (
        <div key={ndx} className="user_item">
          <span className="user_item-title">{`${user_info_label}: `}</span>
          <span className="user_item-desc">{props[item]}</span>
        </div>
      );
    })}
    {is_active && <span className="is_active">Active</span>}
  </div>
));

export default UserItem;
