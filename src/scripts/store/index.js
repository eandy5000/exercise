import { createStore } from "redux";
import reducers from "../reducers";

const store = createStore(reducers);

export default store;

// store.subscribe(() => {
//   console.log(`current state ${store.getState().count.count}`);
// });

// store.dispatch({ type: "test" });
// store.dispatch({ type: "INC" });
// store.dispatch({ type: "INC" });
// store.dispatch({ type: "INC" });
// store.dispatch({ type: "DEC" });
