export {};
export interface Spell {
  index: string;
  name: string;
  url: string;
}
export interface SpellList {
  results: Spell[];
}


export interface DamageType {
  index: string;
  name: string;
  url: string;
}

export interface DamageAtCharacterLevel {
  1: string;
  5: string;
  11: string;
  17: string;
}

export interface SpellData {
  index: string;
  name: string;
  url: string;
  attack_type: string;
  casting_time: string;
  classes: {
    index: string;
    name: string;
    url: string;
  }[];
  components: string[];
  concentration: boolean;
  damage: {
    damage_at_character_level: DamageAtCharacterLevel;
    damage_type: DamageType;
  };
  dc: {
    dc_success: string;
    dc_type: {
      index: string;
      name: string;
      url: string;
    };
  };
  desc: string[];
  duration: string;
  higher_level: string[];
  level: number;
  range: string;
  ritual: boolean;
  school: {
    index: string;
    name: string;
    url: string;
  };
  subclasses: {
    index: string;
    name: string;
    url: string;
  }[];
}


