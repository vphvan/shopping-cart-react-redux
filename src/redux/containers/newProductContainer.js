import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart } from '../actions/index';
import NewProduct from '../../public/content/new-product';

class NewProductContainer extends React.Component {

  render() {
    const { addToCart } = this.props;
    return (
      <NewProduct addToCart = { addToCart } />
    );
  }
}

NewProductContainer.propsTypes = {
  addToCart: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
    }
  }
}

export default connect(null, mapDispatchToProps)(NewProductContainer);