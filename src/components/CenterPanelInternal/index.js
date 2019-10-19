
import React from 'react';

import MagnificProduct from '../MagnificProduct';
import './center-panel-internal.css';
import AaQAAOSwawpXqRI0_400 from '../../assets/product-images/AaQAAOSwawpXqRI0/s-l400.jpg';
import AaQAAOSwawpXqRI0_1600 from '../../assets/product-images/AaQAAOSwawpXqRI0/s-l1600.jpg';

const CenterPanelInternal = () => {
  return (
    <div className='center-panel-internal'>
      <div className='picture-panel'>
        <MagnificProduct
          altMessage="Nike Flex Run 2016 Men's Runinng Shoe Crimson/Black 830369-601 sz 11"
          smallImageSrc={AaQAAOSwawpXqRI0_400}
          largeImageSrc={AaQAAOSwawpXqRI0_1600} />
      </div>
      <div className='summary-panel'>
        Summary Panel
      </div>
    </div>
  );
};

export default CenterPanelInternal;
