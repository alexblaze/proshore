import { SpellList } from "app/components/types/types";

export enum ActionType {
  FETCH_ALL_SPELLS = "FETCH_ALL_SPELLS",
  SET_LOADING = "SET_LOADING",
}

export interface ActionFetchSpells {
  type: ActionType.FETCH_ALL_SPELLS | ActionType.SET_LOADING;
  payload: SpellList;
}
