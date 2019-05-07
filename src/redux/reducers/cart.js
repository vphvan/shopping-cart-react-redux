import * as type from './../constants/actionType';

let initialState = {
  products: [],
  totalCartPrice: 0,
  totalCartQty: 0
};

if (localStorage.getItem('cart')) {
  initialState = JSON.parse(localStorage.getItem('cart'));
}

const addCart = (cart, product) => {
  const { products } = cart;
  let haveProduct = false; // check product exist in cart
  products.map((item, index) => {
    if (item.id === product.id) {
      cart.products[index].qty += 1;
      haveProduct = true;
    }
  });
  if (!haveProduct) {
    product.qty = 1;
    cart.products = cart.products.concat(product);
  }

  return handleCard(cart);
}

const removeFromCart = (cart, product_id) => {
  const { products } = cart;
  products.map((item, index) => {
    if (item.id === product_id) {
      cart.products[index].qty -= 1;
      if (cart.products[index].qty === 0) {
        cart.products.splice(index, 1);
      }
    }
  });

  return handleCard(cart);
}

const removeProduct = (cart, product_id) => {
  const { products } = cart;
  products.map((item, index) => {
    if (item.id === product_id) {
      cart.products.splice(index, 1);
    }
  });

  return handleCard(cart);
}

const handleCard = (cart) => {
  localStorage.removeItem('cart');
  cart.totalCartPrice = 0;
  cart.totalCartQty = 0;
  cart.totalCartQty = cart.products.length;
  cart.products.map((item, index) => {
    cart.totalCartPrice += item.price * item.qty;
  });
  localStorage.setItem('cart', JSON.stringify(cart));
  return cart
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TO_CART:
      state = addCart(state, action.product);
      return {...state}
    case type.REMOVE_FROM_CART:
      state = removeFromCart(state, action.product_id);
      return {...state}
    case type.REMOVE_PRODUCT:
      state = removeProduct(state, action.product_id);
      return {...state}
    default:
      return state
  }
}

export default cart;
