import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Parallax } from 'react-parallax';

const Separator = ({ image, imageAlt }) => (
  <Parallax
    renderLayer={(percentage) => (
      <div
        style={{
          position: 'absolute',
          background: `rgba(4, 4, 45, ${1 - percentage * 1.25})`,
          left: '0',
          top: '0',
          width: '100%',
          height: '100%',
        }}
      />
    )}
    bgImage={image}
    bgImageAlt={imageAlt}
    strength={100}
  >
    <section className="pt240 pb240 image-bg" />
  </Parallax>
);

export default Separator;
