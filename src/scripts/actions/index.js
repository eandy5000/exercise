// counter actions
export function addCount() {
  return { type: "INC" };
}

export function addToCartAction(payload) {
  return {
    type: "ADD",
    payload
  };
}

export function clearCartAction() {
  return { type: "CLEAR" };
}
