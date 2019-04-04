import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Layout, Container } from '../components/common';
import SEO from '../components/common/SEO';
import Header from '../components/theme/Header';
import Heading from '../components/common/Heading';

const AboutPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="about" />
      <Header />
      <Welcome as={Container}>
        <FormattedMessage id="description_about" />
        <section>
          <div className="container">
            <Heading>
              <FormattedMessage id="about" />
            </Heading>
            <div className="row">
              <div className="col-md-10">
                <h1 className="thin">Investing in innovative technology companies since '88</h1>
              </div>
            </div>
            <div className="row mb160 mb-xs-0">
              <div className="col-md-6 col-sm-8">
                <p className="lead">
                  Foundry partners with passionate entrepreneurs and startups to build enduring,
                  era-defining companies that define their categories.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 mb-xs-24">
                <h1 className="large color-primary mb0">140+</h1>
                <h5 className="color-primary mb0">Profitable M&amp;A Ventures</h5>
              </div>
              <div className="col-sm-4 mb-xs-24">
                <h1 className="large color-primary mb0">$1.2b+</h1>
                <h5 className="color-primary mb0">Capital Invested</h5>
              </div>
              <div className="col-sm-4">
                <h1 className="large color-primary mb0">4/5</h1>
                <h5 className="color-primary mb0">Companies Yielding Profit</h5>
              </div>
            </div>
          </div>
        </section>
      </Welcome>
    </React.Fragment>
  </Layout>
);

const Welcome = styled.div`
  padding: 2rem 0;
`;

export default AboutPage;
