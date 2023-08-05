// Import necessary modules
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// Set up the Redux DevTools extension for debugging
// If the extension is available, use it; otherwise, use the standard compose function
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store
// The store holds the complete state tree of the application
// It requires a reducer function to handle state updates
// applyMiddleware is used to enhance the store with middleware, in this case, Redux Thunk
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Export the store instance so it can be used in other parts of the application
export default store;
