import React, { useState, useEffect, Fragment } from 'react'
import { Parallax } from 'react-parallax';
import { document } from 'browser-monads'
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { FormattedMessage } from 'react-intl'
import { Link } from 'gatsby'
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
import logoLight from '../images/logo_hor_light.png'


function useWindowScroll() {
	const [scroll, setScroll] = useState(document.documentElement.scrollTop);

	useEffect(() => {
		const handleScroll = () => setScroll(document.documentElement.scrollTop);
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	});

	return scroll;
}


function IndexPage() {
	const scroll = useWindowScroll(); // Our custom Hook
	return (
		<Layout>
			<React.Fragment>
				<SEO title="welcome" />
				<Header scroll={scroll} />
				<div style={{ width: '100px' }} />
				<Parallax
					bgImage={hero}
					bgImageAlt="hero-image"
					strength={200}
				>
					<section className="fullscreen image-bg">
						<div className={scroll > 20 ? 'scrolled' : ''}>

							<div className="logo-container">
								<div className="logo">
									<Link to="/">
										<h1><img alt="CPS" src={logoLight} /></h1>
										<h2 className="thin">Confidence – Productive – Sustainable</h2>
									</Link>
								</div>
							</div>
						</div>

						<div className="container v-align-transform">
							<div className="row" />
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
	)
}

export default IndexPage;
