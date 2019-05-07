import React from 'react';
import PropTypes from 'prop-types';
import products from './../../../data/products';

class NewProduct extends React.Component {

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  loadProducts = (pros) => {
    let item = [];
    item = pros.map((product, index) => {
      return (
        <div className="col-sm-3" key={index}>
          <div className="single-item">
            <div className="single-item-header">
              <a href="product.html">
                <img src={product.image_url} alt={product.name} style={{width: '270px', height: '320px', objectFit: 'cover'}}/>
              </a>
            </div>
            <div className="single-item-body" style={{padding: '1.5rem 0'}}>
              <p className="single-item-title hidden-text">{product.name}</p>
              <p className="single-item-price">
                <span>{this.numberWithCommas(product.price)} <u>đ</u></span>
              </p>
            </div>
            <div className="single-item-caption">
              <a
                className="add-to-cart pull-left pointer"
                onClick={() => { this.addToCart(product) }}
              >
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="beta-btn primary" href="product.html">
                Chi tiết <i className="fa fa-chevron-right" />
              </a>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      );
    });
    return item;
  }

  addToCart = (product) => {
    console.log(product);
    this.props.addToCart(product);
  }

  render() {
    return (
      <div className="beta-products-list">
        <h4>Sản phẩm HOT</h4>
        <div className="beta-products-details">
          <p className="pull-left">Tìm thấy {products.length} sản phẩm</p>
          <div className="clearfix" />
        </div>
        <div className="row">
          { this.loadProducts(products) }
        </div>
      </div>
      // .beta-products-list
    );
  }
}

NewProduct.propsTypes = {
  addToCart: PropTypes.func.isRequired
}

export default NewProduct;
