import React from 'react';
import Header from './../header';
import Banner from './../banner';
import Content from '../content';
import Footer from './../footer';

class Home extends React.Component {

  render() {
    return (
      <div>
        <Header />
        {/* <div className="rev-slider"></div>
        <Banner /> */}
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Home;