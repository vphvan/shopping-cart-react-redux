import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  renderProduct = (products) => {
    let item = '';
    item = products.map((product, index) => {
      return (
        <div className="cart-item" key={index}>
          <div className="media p-relative">
            <span className="glyphicon glyphicon-remove-sign cart-remove" onClick={() => {this.removeProduct(product.id)}} />
            <a className="pull-left" href="#">
              <img src={product.image_url} alt={product.name} style={{width: '50px', height: '50px', objectFit: 'cover'}}/>
            </a>
            <div className="media-body">
              <span className="cart-item-title">{product.name}</span>
              <span className="cart-item-options">
                <span className="glyphicon glyphicon-minus pointer" onClick={() => {this.removeFromCart(product.id)}} />
                <span className="qty">{product.qty}</span>
                <span className="glyphicon glyphicon-plus pointer" onClick={() => {this.addToCart(product)}} />
              </span>
              <span className="cart-item-amount">
                <span>
                {this.numberWithCommas(product.price*product.qty)} <u>đ</u>
                </span>
              </span>
            </div>
          </div>
        </div>
      );
    });
    return item;
  }

  removeFromCart = (product_id) => {
    this.props.removeFromCart(product_id);
  }

  removeProduct = (product_id) => {
    this.props.removeProduct(product_id);
  }

  addToCart = (product) => {
    this.props.addToCart(product);
  }

  render() {
    const { products, totalCartQty, totalCartPrice } = this.props.cart;
    return (
      <div className="beta-comp">
        <div className="cart">
          <div className="beta-select">
            <i className="fa fa-shopping-cart" /> Giỏ hàng ({totalCartQty > 0 ? totalCartQty : 'Trống'}){" "}
            <i className="fa fa-chevron-down" />
          </div>
          <div className="beta-dropdown cart-body">
            { this.renderProduct(products) }
            <div className="cart-caption">
              <div className="cart-total text-right">
                Tổng tiền: <span className="cart-total-value">{ this.numberWithCommas(totalCartPrice) } <u>đ</u></span>
              </div>
              <div className="clearfix" />

              <div className="center">
                <div className="space10">&nbsp;</div>
                <a href="checkout.html" className="beta-btn primary text-center">
                  Đặt hàng <i className="fa fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- .cart --> */}
      </div>
    );
  }
}

Cart.propsTypes = {
  cart: PropTypes.shape({
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image_url: PropTypes.string.isRequired,
        qty: PropTypes.number.isRequired
      })
    ).isRequired,
    totalCartPrice: PropTypes.number.isRequired,
    totalCartQty: PropTypes.number.isRequired
  }),
  removeFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired
}

export default Cart;
