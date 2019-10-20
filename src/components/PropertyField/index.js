
import React from 'react';

import './property-field.css';

const PropertyField = ({ label, value }) => {
  return (
    <div className='property-field'>
      <div className='property-label'>{`${label}:`}</div>
      <div className='property-value'>{value}</div>
    </div>
  );
};

export default PropertyField;
