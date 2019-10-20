
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

import './magnific-product.css';

const MagnificProduct = ({ smallImageSrc, largeImageSrc, altMessage, externalRender }) => {
  return (
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
  );
};

export default MagnificProduct;
