
import React from 'react';

import LeftSummary from './LeftSummary';
import './product-summary.css';

const ProductSummary = () => {
  return (
    <div className='product-summary'>
      <div className='left-product-summary'>
        <LeftSummary />
      </div>
      <div className='right-product-summary'>
        Right Summary
      </div>
    </div>
  );
};

export default ProductSummary;
