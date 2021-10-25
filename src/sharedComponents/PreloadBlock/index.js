import React from 'react';
import preloader from '../../icons/preloader.gif';

import './style.css';

const PreloadBlock = () => (
  <div className="preload_block-wrapper">
    <img src={preloader} alt="preloader" />
  </div>
);

export default PreloadBlock;
