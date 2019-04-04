import React, { Fragment } from 'react'
import { compose, withStateHandlers } from 'recompose';

const SelectLanguage = ({ selectLanguage, lang }) => (
	<Fragment>
		<a href="#">{lang}</a>

		<ul>
			<li><a onClick={() => selectLanguage('en')}>English</a></li>
			<li><a onClick={() => selectLanguage('es')}>Español</a></li>
		</ul>
	</Fragment>
);

const enhance = compose(
	withStateHandlers((props) => ({ language: props.lang }), {
		selectLanguage: (values, { toggleLanguage }) => (value) => {
			toggleLanguage(value);
			return {
				language: value,
			};
		},
	}),
);

export default enhance(SelectLanguage);
