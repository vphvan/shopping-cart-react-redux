import React from 'react';

class NavigationMenu extends React.Component {

  render() {
    return (
      <div className="header-bottom" style={{backgroundColor: '#0277b8'}}>
        <div className="container">
          <a className="visible-xs beta-menu-toggle pull-right" href="#"><span className='beta-menu-toggle-text'>Menu</span> <i className="fa fa-bars"></i></a>
          <div className="visible-xs clearfix"></div>
          <nav className="main-menu">
            <ul className="l-inline ov">
              <li><a href="index.html">Trang chủ</a></li>
              <li><a href="#">Sản phẩm</a>
                <ul className="sub-menu">
                  <li><a href="product_type.html">Sản phẩm 1</a></li>
                  <li><a href="product_type.html">Sản phẩm 2</a></li>
                  <li><a href="product_type.html">Sản phẩm 4</a></li>
                </ul>
              </li>
              <li><a href="about.html">Giới thiệu</a></li>
              <li><a href="contacts.html">Liên hệ</a></li>
            </ul>
            <div className="clearfix"></div>
          </nav>
        </div>
        {/* <!-- .container --> */}
      </div>
      // <!-- .header-bottom -->
    );
  }
}

export default NavigationMenu;