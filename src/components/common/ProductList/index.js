import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class ProductList extends Component {
	render() {
		return (
			<div className="products-container">
				<FormattedMessage id="products_list">
					{(content) => {
						// 'content' esta guardado como string separado por comas,
						// para cumplir con el type de react int, lo convierto a
						// array (split en el string) antes de tratarlo
						const contentArray = content.split(',');
						return contentArray.map((producto) => <span key={producto} className="product">{producto}</span>) }}
				</FormattedMessage>
			</div>
		);
	}
}

export default ProductList;
