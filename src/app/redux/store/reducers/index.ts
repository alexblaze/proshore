// Import the combineReducers function from Redux
import { combineReducers } from "redux";

// Import the spellsReducer, which handles the state related to spells data
import spellsReducer from "./spellReducer/spellsReducer";

// Combine all reducers into a single root reducer using the combineReducers function
// The root reducer represents the overall state of the application
// In this case, it combines the spellsReducer under the "spellData" key in the state object
const rootReducer = combineReducers({
  spellData: spellsReducer,
});

// Export the root reducer to be used in the Redux store
export default rootReducer;

// Define the State type to represent the overall state of the application
// The State type is based on the return type of the combineReducers function
// It reflects the structure of the state object managed by the root reducer
// This allows TypeScript to enforce type safety when accessing the state in components
export type State = ReturnType<typeof rootReducer>;
