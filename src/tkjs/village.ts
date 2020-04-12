import { NotFoundError } from './errors'
import { Village: VillageInterface } from './interfaces/village'
import Gameworld from './driver/gameworld'

class MasterBuilder {
  private driver: Gameworld = Gameworld;

  constructor(villageId: string) {
    this.villageId = villageId
  }

  upgrade(building: string) {
    //
  }
}

class Village {
  private data: VillageInterface;
  private driver: Gameworld = Gameworld;
  // private rallyPoint: RallyPoint
  private masterBuilder: MasterBuilder

  constructor(data: any) {
    this.data = data
    this.masterBuilder = new MasterBuilder(data.villageId)
  }

  get villageId() {
    return this.data.villageId
  }

  get villageName() {
    return this.data.villageName
  }

  get isMainVillage() {
    return this.data.isMainVillage
  }
}

class Villages {
  // class for storing Village class
  private villageList: Array<Village>;

  constructor(villageList: Array<any>) {
    this.villageList = villageList.map(village => new Village(village))
  }

  get villages() {
    return this.villageList
  }

  get capital() {
    return this.villageList.find(village => village.isMainVillage)
  }

  getVillageByName(villageName) {
    const village = this.villageList.find(village => village.name === villageName)
    if (!village) throw new NotFoundError(`Village ${villageName} not found`)
    return village
  }

  getVillageById(villageId) {
    const village = this.villageList.find(village => village.villageId === villageId)
    if (!village) throw new NotFoundError(`Village with id: ${villageId} not found`)
    return village
  }
}
