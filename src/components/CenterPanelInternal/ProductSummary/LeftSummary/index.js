
import React from 'react';

import PropertyField from '../../../PropertyField';
import {
  ConditionPropertyValue,
  USSizePropertyValue,
  QuantityPropertyValue,
  ShippingPropertyValue,
  DeliveryPropertyValue,
  PaymentsPropertyValue,
  ReturnsPropertyValue
} from './elements';
import './left-summary.css';

const upperPropertyFields = [
  {
    label: 'Condition',
    value: <ConditionPropertyValue />
  },
  {
    label: 'US Size',
    value: <USSizePropertyValue />
  },
  {
    label: 'Quantity',
    value: <QuantityPropertyValue />
  }
];

const lowerPropertyFields = [
  {
    label: 'Shipping',
    value: <ShippingPropertyValue />,
    verticalAlignTop: true
  },
  {
    label: 'Delivery',
    value: <DeliveryPropertyValue />,
    verticalAlignTop: true
  },
  {
    label: 'Payments',
    value: <PaymentsPropertyValue />
  },
  {
    label: 'Returns',
    value: <ReturnsPropertyValue />
  }
];

const LeftSummary = () => {
  return (
    <div className='generic-font-color'>
      <div className='product-name bold-font-color'>Nike Flex Run 2016 Men's Runinng Shoe Crimson/Black 830369-601 sz 11</div>
      { upperPropertyFields.map(propertyField => (
        <PropertyField
          key={propertyField.label}
          verticalAlignTop={propertyField.verticalAlignTop}
          label={propertyField.label}
          value={propertyField.value} />
      )) }
      { lowerPropertyFields.map(propertyField => (
        <PropertyField
          key={propertyField.label}
          verticalAlignTop={propertyField.verticalAlignTop}
          label={propertyField.label}
          value={propertyField.value} />
      )) }
    </div>
  );
};

export default LeftSummary;
