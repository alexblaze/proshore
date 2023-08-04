import { combineReducers } from "redux";
import spellsReducer from "./spellReducer/spellsReducer";
export default combineReducers({
  spellData: spellsReducer,
});
export type State = ReturnType<typeof combineReducers>;
