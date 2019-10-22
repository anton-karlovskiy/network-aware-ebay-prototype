
import React from 'react';

import './simple-product.css';

const SimpleProduct = ({ smallImageSrc, altMessage }) => (
  <img className='simple-small-image' width='100%' height='auto' src={smallImageSrc} alt={altMessage} />
);

export default SimpleProduct;
