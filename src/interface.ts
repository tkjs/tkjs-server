export interface Session {
  session?: string;
  cookie?: string;
  age?: Date;
}

export interface Account {
  email?: string;
  password?: string;
  worldname?: string;
}

export interface Store {
  msid?: string;
  account?: Account;
  lobby?: Session;
  gameworld?: Session;
}

export interface RegionIds {
  [regionId: string]: Array<string>;
}

export interface RequestPayload {
  action: string;
  controller: string;
  params: any;
}

export interface Coordinate {
  x: number;
  y: number;
}

/* ---- Map interface section ---- */

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

/* --- End of Map interface section --- */
