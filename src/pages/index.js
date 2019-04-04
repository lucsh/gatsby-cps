import React from 'react';
import { Parallax } from 'react-parallax';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Layout } from '../components/common';
import SEO from '../components/common/SEO';
import Header from '../components/theme/Header';
import hero from '../images/hero.jpg';
import rawMaterials from '../images/raw-materials.jpg';


// Sections
import About from '../sections/about';
import Products from '../sections/products';
import Separator from '../sections/separator';
import FooterSection from '../sections/footer';
import { FormattedMessage } from 'react-intl'

const IndexPage = () => (
	<Layout>
		<React.Fragment>
			<SEO title="welcome" />
			<Header />
			<Parallax
				renderLayer={(percentage) => (
					<div
						style={{
							position: 'absolute',
							background: `rgba(4, 4, 45, ${percentage * 1.25})`,
							left: '0',
							top: '0',
							width: '100%',
							height: '100%',
						}}
					/>
				)}
				bgImage={hero}
				bgImageAlt="hero image"
				strength={100}
			>
				<section className="fullscreen image-bg  ">
					<div className="container v-align-transform">
						<div className="row">
							<div className="col-sm-12">
								<h1 className="mb0">Chemical Products Suppliers</h1>
								<h2 className="thin">Confidence – Productive – Sustainable</h2>
							</div>
						</div>
					</div>
					<div className="align-bottom text-center">
						<FormattedMessage id="get_to_know_us">
							{(get_to_know_us) => (
								<AnchorLink className="btn btn-white mb32" href="#about">
									{get_to_know_us}
								</AnchorLink>
							)}
						</FormattedMessage>
					</div>
				</section>
			</Parallax>
			<About id="about" />
			<Separator image={rawMaterials} imageAlt="separator image" />

			<Products id="products" />
			<FooterSection id="footer" />
		</React.Fragment>
	</Layout>
);

export default IndexPage;
