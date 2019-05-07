import * as type from './../constants/actionType';

export const addToCart = (product) => ({
  type: type.ADD_TO_CART,
  product
})

export const removeFromCart = (product_id) => ({
  type: type.REMOVE_FROM_CART,
  product_id
})

export const removeProduct = (product_id) => ({
  type: type.REMOVE_PRODUCT,
  product_id
})
