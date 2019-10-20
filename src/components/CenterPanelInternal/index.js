
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
          largeImageSrc={AaQAAOSwawpXqRI0_1600}
          externalRender={{
            enlargedImagePortalId: 'enlarged-picture-panel',
            enlargedImageContainerDimensions: {
              width: '185%',
              height: '120%'
            }
          }} />
      </div>
      <div id='enlarged-picture-panel' className='enlarged-picture-panel' />
      <div className='summary-panel'>
      </div>
    </div>
  );
};

export default CenterPanelInternal;
