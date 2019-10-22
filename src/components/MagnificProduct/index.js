
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

import './magnific-product.css';

const MagnificProduct = ({ smallImageSrc, largeImageSrc, altMessage, externalRender, hoverOnProduct }) => (
  <div onMouseEnter={hoverOnProduct} onMouseLeave={hoverOnProduct}>
    <ReactImageMagnify {...{
      smallImage: {
          alt: altMessage,
          isFluidWidth: true,
          src: smallImageSrc
      },
      largeImage: {
          src: largeImageSrc,
          width: 1200,
          height: 1800
      },
      imageClassName: 'small-image',
      ...externalRender
    }} />
  </div>
);

export default MagnificProduct;
