import RESOURCE from "./enum";

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

export interface Village {
  villageId: string;
  playerId: string;
  name: string;
  tribeId: string;
  belongsToKing: string;
  belongsToKingdom: string;
  type: string;
  population: string;
  coordinates: Coordinate;
  isMainVillage: boolean;
  isTown: boolean;
  treasuresUsable: string;
  treasures: string;
  allowTributeCollection: string;
  protectionGranted: string;
  tributeCollectorPlayerId: number;
  realTributePercent: number;
  // being used for own village detail
  supplyBuildings?: string;
  supplyTroops?: string;
  production?: Resources;
  storage?: Resources;
  treasury?: Resources;
  storageCapacity?: Resources;
  usedControlPoints?: string;
  availableControlPoints?: string;
  culturePoints?: number;
  celebrationType?: string;
  celebrationEnd?: string;
  culturePointProduction?: string;
  treasureResourceBonus?: string;
  acceptance?: number;
  acceptanceProduction?: string;
  tributes?: Resources;
  tributeCapacity?: string;
  tributeTreasures?: number;
  tributeProduction?: number;
  tributeProductionDetail?: Resources;
  tributeTime?: string;
  tributeRequiredToFetch?: number;
  estimatedWarehouseLevel?: number;
}

export interface Resources {
  [RESOURCE.WOOD]: number | string;
  [RESOURCE.CLAY]: number | string;
  [RESOURCE.IRON]: number | string;
  [RESOURCE.CROP]: number | string;
}
