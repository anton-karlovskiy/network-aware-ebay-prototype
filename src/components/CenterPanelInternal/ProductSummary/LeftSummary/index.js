
import React from 'react';

import PropertyField from '../../../PropertyField';
import './left-summary.css';

const ConditionPropertyValue = () => {
  return (
    <strong className='bold-font-color'>New with box</strong>
  );
};

const LeftSummary = () => {
  return (
    <div className='generic-font-color'>
      <div className='product-name bold-font-color'>Nike Flex Run 2016 Men's Runinng Shoe Crimson/Black 830369-601 sz 11</div>
      <PropertyField label='Condition' value={<ConditionPropertyValue />} />
    </div>
  );
};

export default LeftSummary;
