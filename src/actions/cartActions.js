import { ADD_TO_CART, REMOVE_FROM_CART } from "../const/const";


export const addToCart = ( product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((i) => {
    if (i._id === product._id) {
      alreadyExists = true;
      i.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice().filter((i) => i._id !== product._id);
    dispatch({type: REMOVE_FROM_CART,payload: { cartItems } });
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
};
