import React from 'react';
import { FormattedMessage } from 'react-intl';
import Heading from '../components/common/Heading';

const AboutPage = ({ id }) => (
  <section id={id}>
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <h1 className="thin">
            {' '}
            <FormattedMessage id="about" />
          </h1>
        </div>
      </div>
      <div className="row mb-xs-0">
        <div className="col-md-10 col-sm-8">
          <p className="lead">
            <FormattedMessage id="description_about" />
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8 mb-xs-24">
          <h2 className=" color-primary mb0"> Chemical Products Suppliers</h2>
          <h4 className="thin"> Confidence – Productive – Sustainable</h4>
        </div>
      </div>
    </div>
  </section>
);

export default AboutPage;
