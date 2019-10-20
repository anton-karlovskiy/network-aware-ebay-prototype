
import React from 'react';

import PropertyField from '../../../PropertyField';
import './left-summary.css';

const ConditionPropertyValue = () => {
  return (
    <strong className='bold-font-color'>New with box</strong>
  );
};

// ray test touch <
const USSizePropertyValue = () => {
  return (
    <select style={{
      border: '1px solid lightgray',
      width: '190px',
      borderRadius: '3px'
    }}>
      <option value='select'>- Select -</option>
      <option value='11' selected>11</option>
    </select>
  );
};

const upperPropertyFields = [
  {
    label: 'Condition',
    value: <ConditionPropertyValue />
  },
  {
    label: 'US Size',
    value: <USSizePropertyValue />
  }
];
// ray test touch >

const LeftSummary = () => {
  return (
    <div className='generic-font-color'>
      <div className='product-name bold-font-color'>Nike Flex Run 2016 Men's Runinng Shoe Crimson/Black 830369-601 sz 11</div>
      {/* ray test touch < */}
      { upperPropertyFields.map(propertyField => (
        <PropertyField key={propertyField.label} label={propertyField.label} value={propertyField.value} />
      )) }
      {/* ray test touch > */}
    </div>
  );
};

export default LeftSummary;
