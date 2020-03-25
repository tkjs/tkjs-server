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
