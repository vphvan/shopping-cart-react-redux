import React from 'react';
import Cart from './cart';
import NavigationMenu from './navigation-menu';
import Search from './search';
import CartContainer from './../../redux/containers/cartContainer';

class Header extends React.Component {

  render() {
    return (
      <div id="header">
      <div className="header-top">
        <div className="container">
          <div className="pull-left auto-width-left">
            <ul className="top-menu menu-beta l-inline">
              <li><a href=""><i className="fa fa-home"></i> 90-92 Lê Thị Riêng, Bến Thành, Quận 1</a></li>
              <li><a href=""><i className="fa fa-phone"></i> 0163 296 7751</a></li>
            </ul>
          </div>
          <div className="pull-right auto-width-right">
            <ul className="top-details menu-beta l-inline">
              <li><a href="#"><i className="fa fa-user"></i>Tài khoản</a></li>
              <li><a href="#">Đăng kí</a></li>
              <li><a href="#">Đăng nhập</a></li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
        {/* <!-- .container --> */}
      </div>
      {/* <!-- .header-top --> */}
      <div className="header-body">
        <div className="container beta-relative">
          <div className="pull-left">
            <a href="index.html" id="logo"><img src="assets/dest/images/logo-cake.png" width="200px" alt="" /></a>
          </div>
          <div className="pull-right beta-components space-left ov">
            <div className="space10">&nbsp;</div>
            <Search />
            <CartContainer />
          </div>
          <div className="clearfix"></div>
        </div>
        {/* <!-- .container --> */}
      </div>
      {/* <!-- .header-body --> */}
      <NavigationMenu />
    </div>
    // <!-- #header -->
    );
  }
}

export default Header;