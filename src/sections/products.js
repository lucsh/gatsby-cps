import React from 'react';
import { FormattedMessage } from 'react-intl';
import ProductList from '../components/common/ProductList';

const ProductSection = ({ id }) => (
  <section id={id}>
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <h1 className="thin">
            {' '}
            <FormattedMessage id="products" />
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ProductList />
        </div>
      </div>
    </div>
  </section>
);
export default ProductSection;
