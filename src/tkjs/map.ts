import { Cell } from "../interface";

class Map {
  private cellList: Array<Cell>;
  private playerList: Array<any>;
  private kingdomList: Array<any>;

  constructor(cells: Array<Cell>, players: Array<any>, kingdoms: Array<any>) {
    this.cellList = cells;
    this.playerList = players;
    this.kingdomList = kingdoms;
  }

  get cell() {
    return this.cellList;
  }

  get villages() {
    return this.cellList.filter(cell => cell.village);
  }

  get tiles() {
    return this.cellList.filter(cell => !cell.village && cell.resType);
  }

  get oasis() {
    return this.cellList.filter(cell => cell.oasis);
  }

  get wilderness() {
    return this.cellList.filter(cell => !cell.oasis && !cell.resType);
  }
}

export default Map;
