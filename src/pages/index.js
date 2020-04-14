import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import PrimaryButton from '../components/PrimaryButton';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ color: 'purple' }}>Dev blog for newbies</h1>
    <p>Welcome to My blog</p>
    <p>Now go build something great.</p>
    <PrimaryButton buttonText="Click me home" />
    <Link to="/about/"><PrimaryButton buttonText="Click me two" /></Link>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
