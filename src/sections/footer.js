import React, { useState }  from 'react';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import logoLight from '../images/logo_cps-blanco.png'

const API_PATH = './mailer.php';

const FooterSection = () => {
	// Estos son hooks, no te asustes.
	// https://reactjs.org/docs/hooks-overview.html
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [company, setCompany] = useState('');
	const [message, setMessage] = useState('');
	const [mailSent, setMailSent] = useState(false);
	const [error, setError] = useState(null);

	const handleFormSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'post',
			url: `${API_PATH}`,
			headers: { 'content-type': 'application/json' },
			data: {
				name,
				email,
				address,
				company,
				message,
			}
		})
			.then(result => {
				// si hay resultado es que fue ok
				setMailSent(!!result.data)
			})
			.catch(err => setError(err.message));
	};


	return (
		<footer className="footer-1 bg-dark">
			<div className="container">
				<section>
					<div className="container">
						<div className="row">
							<div className="col-sm-4 col-md-4">
								<FormattedMessage id="get_in_touch">
									{(get_in_touch) => <h4 className="uppercase">{get_in_touch}</h4>}
								</FormattedMessage>
								<FormattedMessage id="contact_us">
									{(contact_us) => <p>{contact_us}</p>}
								</FormattedMessage>
								<hr />
								<p>

									<strong><img className="logo-footer" alt="CPS" src={logoLight} />Chemical Products Suppliers LLC</strong>
									<br />

									EIN (Tax ID) 30-1071000
									<br />
                1400 Broadfield Blvd
									<br />
                Suite 200
									<br />
                Houston TX 77084
									<br />
                United States of America
								</p>
								<hr />
								<p>
									<strong>E:</strong> info@cpsamericas.com
									<br />
									<strong>P:</strong> +1 713 248 9523
									<br />
								</p>
							</div>
							<div className="col-sm-6 col-md-6 offset-md-2">
								<form
									className="form-email"

									onSubmit={e => handleFormSubmit(e)}
								>
									<FormattedMessage id="name_placeholder">
										{(name_placeholder) => (
											<input
												type="text"
												className="validate-required"
												name="name"
												placeholder={name_placeholder}
												onChange={e => setName(e.target.value)}
											/>
										)}
									</FormattedMessage>
									<FormattedMessage id="email_placeholder">
										{(email_placeholder) => (
											<input
												type="text"
												className="validate-required validate-email"
												name="email"
												placeholder={email_placeholder}
												onChange={e => setEmail(e.target.value)}
											/>
										)}
									</FormattedMessage>
									<FormattedMessage id="company_placeholder">
										{(company_placeholder) => (
											<input
												type="text"
												className="validate-required"
												name="company"
												placeholder={company_placeholder}
												onChange={e => setCompany(e.target.value)}
											/>
										)}
									</FormattedMessage>
									<FormattedMessage id="message_placeholder">
										{(message_placeholder) => (
											<textarea
												className="validate-required"
												name="message"
												rows="4"
												placeholder={message_placeholder}
												onChange={e => setMessage(e.target.value)}
											/>
										)}
									</FormattedMessage>
									<div className="col-xs-12 col-sm-6 address-h">
										<input className="input-field" type="text" name="address" id="address" onChange={e => setAddress(e.target.value)} />
									</div>
									<FormattedMessage id="send_message">
										{(send_message) => <button type="submit">{send_message}</button>}
									</FormattedMessage>
								</form>
								<div>
									{error
									&& <div>{error}</div>
									}
								</div>
								<div>
									{mailSent
									&& <div>Thanks for your submission, we will be in touch shortly.</div>
									}
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</footer>
	)
};
export default FooterSection;
