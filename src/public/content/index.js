import React from 'react';
import NewProductContainer from './../../redux/containers/newProductContainer';
import TopProduct from './top-product';

class Content extends React.Component {
  render() {
    return (
      <div className="container">
        <div id="content" className="space-top-none">
          <div className="main-content">
            <div className="space60">&nbsp;</div>
            <div className="row">
              <div className="col-sm-12">
                <NewProductContainer />
                <div className="space50">&nbsp;</div>
                {/* <TopProduct /> */}
              </div>
            </div>
            {/* end section with sidebar and main content */}
          </div>
          {/* .main-content */}
        </div>
        {/* #content */}
      </div>
      // .container
    );
  }
}

export default Content;
