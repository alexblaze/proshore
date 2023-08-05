// Import the types related to actions and action types
import { ActionFetchSpells, ActionType } from "./type";

// Define the shape of the spells state
interface SpellsState {
  error: null | string;
  data: any[]; // You can replace 'any' with the actual type of the data array.
  isLoading: boolean;
  favoriteSpells: any[]; // Replace 'any' with the type representing the favorite spells.
  singleSpell: any | null; // Replace 'any' with the type representing a single spell or null.
}

// Define the initial state for the spells state
const initialState: SpellsState = {
  error: null,
  data: [],
  isLoading: true,
  favoriteSpells: [],
  singleSpell: null,
};

// Define the spellsReducer function that handles different action types
const spellsReducer = (
  state: SpellsState = initialState,
  action: ActionFetchSpells
) => {
  switch (action.type) {
    case ActionType.FETCH_ALL_SPELLS:
      return fetchSpellData(state, action);

    case ActionType.FETCH_SINGLE_SPELL:
      return {
        ...state,
        singleSpell: action.payload,
      };

    case ActionType.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case ActionType.ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteSpells: [...state.favoriteSpells, action.payload],
      };

    case ActionType.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteSpells: state.favoriteSpells.filter(
          (spellIndex) => spellIndex !== action.payload
        ),
      };

    default:
      return state;
  }
};

// Helper function to update the state when fetching spell data
const fetchSpellData = (state: SpellsState, action: ActionFetchSpells) => {
  return {
    ...state,
    data: action?.payload,
  };
};

// Export the spellsReducer function to be used in the Redux store
export default spellsReducer;
