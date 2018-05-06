const initalCart = { cart: [] };

export default function cartReducer(state = initalCart, action) {
  switch (action.type) {
    case "ADD":
      return Object.assign({}, state, {
        cart: [...state.cart, action.payload]
      });
    case "CLEAR":
      return Object.assign({}, state, { cart: [] });
    default:
      return state;
  }
}
