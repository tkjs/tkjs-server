export interface SessionInterface {
  session?: string;
  cookie?: string;
  age?: Date;
}

export interface AccountInterface {
  email?: string;
  password?: string;
  worldname?: string;
}

export interface StoreInterface {
  msid?: string;
  account?: AccountInterface;
  lobby?: SessionInterface;
  gameworld?: SessionInterface;
}

export interface RegionIdsInterface {
  [regionId: string]: Array<string>;
}

export interface RequestPayloadInterface {
  action: string;
  controller: string;
  params: any;
}

export interface CoordinateInterface {
  x: number;
  y: number;
}

/* ---- Map interface section ---- */

export interface CellInterface {
  id: string;
  owner: string;
  landscape: string;
  playerId?: string;
  resType?: string;
  village?: VillageInterface;
  oasis?: OasisInterface;
}

export interface VillageInterface {
  villageId: string;
  name: string;
  population: string;
  type: string;
  hasActiveTreasury: boolean;
  influenceSize?: number;
  treasures?: string;
}

export interface OasisInterface {
  bonus: any;
  units: Array<any>;
  type: string;
  oasisStatus: string;
  kingdomId: string;
  kingId: string;
}

/* --- End of Map interface section --- */
