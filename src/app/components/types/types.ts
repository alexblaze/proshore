export {};
export interface Spell {
  index: string;
  name: string;
  url: string;
}
export interface SpellList {
  results: Spell[];
}

export interface SpellState {
  spellData: {
    data: SpellList;
    error: boolean;
    isLoading: boolean;
  };
}

export interface DispatchProps {
  fetchAllSpells: () => void;
}
