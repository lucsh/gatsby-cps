import React from 'react';
import { Parallax } from 'react-parallax';

const Separator = ({ image, imageAlt }) => (
	<Parallax
		bgImage={image}
		bgImageAlt={imageAlt}
		strength={200}
	>
		<div style={{ height: '260px' }} />
	</Parallax>
);

export default Separator;
