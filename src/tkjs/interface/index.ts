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

export interface Resources {
  [RESOURCE.WOOD]: number | string;
  [RESOURCE.CLAY]: number | string;
  [RESOURCE.IRON]: number | string;
  [RESOURCE.CROP]: number | string;
}
