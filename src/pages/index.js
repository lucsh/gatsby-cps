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


const asd = React.createRef();


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
	const bgScroll = asd.current && asd.current.getBoundingClientRect().top
	console.log('< asd');
	console.log(scroll);
	console.log(bgScroll);
	console.log(scroll - bgScroll);
	console.log('asd />');
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
					<section ref={asd} className="fullscreen image-bg">
						<div className={scroll > 0 ? 'scrolled-logo-container' : 'logo-container'}>
							<div className={scroll > 0 ? 'scrolled logo' : 'logo'}>
								<Link to="/">
									<h1><img alt="CPS" src={logoLight} /></h1>
									<h2 className="thin" style={{ fontSize: '1em' }}>Confidence – Productive – Sustainable</h2>

								</Link>
							</div>
						</div>
						<div className="container v-align-transform">
							<div className="row">
								<div className="col-sm-12">
									{/* <h1 className="mb0">Chemical Products Suppliers</h1> */}


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
	)
}

export default IndexPage;
