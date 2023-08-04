import { SpellList } from "app/components/types/types";

export enum ActionType {
  FETCH_ALL_SPELLS = "FETCH_ALL_SPELLS",
  SET_LOADING = "SET_LOADING",
  ADD_TO_FAVORITES="ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES="REMOVE_FROM_FAVORITES",
  FETCH_SINGLE_SPELL="FETCH_SINGLE_SPELL"
  
}

export interface ActionFetchSpells {
  type: ActionType.FETCH_ALL_SPELLS | ActionType.SET_LOADING | ActionType.REMOVE_FROM_FAVORITES | ActionType.ADD_TO_FAVORITES | ActionType.FETCH_SINGLE_SPELL;
  payload: SpellList;
}
