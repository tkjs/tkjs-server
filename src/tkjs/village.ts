import { NotFoundError } from "./errors";
import { Village as VillageInterface } from "./interface/village";
import Gameworld from "./driver/gameworld";

class MasterBuilder {
  private driver: Gameworld = Gameworld;
  villageId: string;

  constructor(villageId: string) {
    this.villageId = villageId;
  }

  upgrade(building: string) {
    //
  }
}

class RallyPoint {
  private driver: Gameworld = Gameworld;
  villageId: string;

  constructor(villageId: string) {
    this.villageId = villageId;
  }
}

class Village {
  private data: VillageInterface;
  private driver: Gameworld = Gameworld;
  private rallyPoint: RallyPoint;
  private masterBuilder: MasterBuilder;

  constructor(data: VillageInterface) {
    this.data = data;
    this.rallyPoint = new RallyPoint(data.villageId);
    this.masterBuilder = new MasterBuilder(data.villageId);
  }

  get details() {
    return this.data;
  }

  get villageId() {
    return this.data.villageId;
  }

  get name() {
    return this.data.name;
  }

  get isMainVillage() {
    return this.data.isMainVillage;
  }
}

class Villages {
  // class for storing Village class
  private villageList: Array<Village>;

  constructor(villageList: Array<VillageInterface>) {
    this.villageList = villageList.map((village: VillageInterface) => new Village(village));
  }

  get villages() {
    return this.villageList;
  }

  get capital() {
    return this.villageList.find((village: Village) => village.isMainVillage);
  }

  getVillageByName(villageName: string) {
    /* case sensitive */
    const village = this.villageList.find((village: Village) => village.name == villageName);
    if (!village) throw new NotFoundError(`Village ${villageName} not found`);
    return village;
  }

  getVillageById(villageId: string | number) {
    const village = this.villageList.find((village: Village) => village.villageId == villageId);
    if (!village) throw new NotFoundError(`Village with id: ${villageId} not found`);
    return village;
  }
}

export default Villages
