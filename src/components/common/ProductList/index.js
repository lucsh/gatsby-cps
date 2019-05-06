import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

class ProductList extends Component {
	render() {
		return (
			<div className="products-container">
				<FormattedMessage id="products_list">
					{(content) => content.map((producto) => <span key={producto} className="product">{producto}</span>)}
				</FormattedMessage>
			</div>
		);
	}
}

export default ProductList;
