// All interface related to Map object

export interface Cell {
  id: string;
  owner: string;
  landscape: string;
  playerId?: string;
  resType?: string;
  village?: Village;
  oasis?: Oasis;
}

export interface Village {
  villageId: string;
  name: string;
  population: string;
  type: string;
  hasActiveTreasury: boolean;
  influenceSize?: number;
  treasures?: string;
}

export interface Oasis {
  bonus: any;
  units: Array<any>;
  type: string;
  oasisStatus: string;
  kingdomId: string;
  kingId: string;
}

export interface Player {
  playerId: string;
  name: string;
  country: string;
  tribeId: string;
  kingdomRole: string;
  kingStatus: boolean;
  kingdomId: string;
  kingId: number;
  spawnedOnMap: string;
  active: string;
}

export interface Kingdom {
  kingdomId: string;
  tag: string;
}
