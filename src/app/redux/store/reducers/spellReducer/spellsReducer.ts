import { ActionFetchSpells, ActionType } from "./type";

const initialState = {
  error: null,
  data: [],
  isLoading: true,
};

const spellsReducer = (
  state: object = initialState,
  action: ActionFetchSpells
) => {
  switch (action.type) {
    case ActionType.FETCH_ALL_SPELLS:
      return fetchSpellData(action);

    case ActionType.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

const fetchSpellData = (action: ActionFetchSpells) => {
  let updatedStateData = {
    ...initialState,
    data: action?.payload,
  };
  return updatedStateData;
};

export default spellsReducer;
