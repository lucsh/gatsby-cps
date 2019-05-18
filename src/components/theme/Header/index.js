import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Context } from '../../common';
import SelectLanguage from './SelectLanguage';
// import logoDark from '../../../images/logo_hor.png';
// import logoLight from '../../../images/logo_hor_light.png';

const Header = () => {
	return (
		<Context.Consumer>
			{({ toggleLanguage, lang }) => (
				<nav className="absolute transparent">
					<div className="nav-bar">

						<div className="module left" />
						<div className="module-group right">
							<div className="module left">
								<ul className="menu">
									<li>
										<Link to="/">
											<FormattedMessage id="home" />
										</Link>
									</li>
									<li>
										<FormattedMessage id="about">
											{(about) => (
												<AnchorLink offset="93" href="#about">
													{about}
												</AnchorLink>
											)}
										</FormattedMessage>
									</li>
									<li>
										<FormattedMessage id="products">
											{(products) => (
												<AnchorLink offset="93" href="#products">
													{products}
												</AnchorLink>
											)}
										</FormattedMessage>
									</li>
								</ul>
							</div>
							<div className="module widget-handle language left">
								<ul className="menu">
									<li className="has-dropdown">
										<SelectLanguage lang={lang} toggleLanguage={toggleLanguage} />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>

			)}
		</Context.Consumer>
	)
};

export default Header;
