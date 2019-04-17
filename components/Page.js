import React, { Component } from 'react';
import Meta from '../components/Meta';
import Head from '../components/Head';

class Page extends Component {
  render() {
    return (
      <div>
        <Head />
        <Meta />
        {this.props.children}
      </div>
    );
  }
}

export default Page;