import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, removeProduct } from '../actions/index';
import Cart from './../../public/header/cart';

class CartContainer extends React.Component {

  render() {
    const { cart, removeFromCart, addToCart, removeProduct } = this.props;
    return (
      <Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} removeProduct={removeProduct} />
    );
  }
}

CartContainer.propsTypes = {
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

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    removeFromCart: (product_id) => {
      dispatch(removeFromCart(product_id));
    },
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
    removeProduct: (product_id) => {
      dispatch(removeProduct(product_id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);