const intialCount = { count: 0 };

export default function countReducer(state = intialCount, action) {
  switch (action.type) {
    case "INC":
      return Object.assign({}, state, { count: state.count + 1 });
    case "DEC":
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
}
