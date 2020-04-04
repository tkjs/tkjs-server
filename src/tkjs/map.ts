import { Cell, Player, Kingdom } from "../interface/map";

class Map {
  private cellList: Array<Cell>;
  private playerList: Array<Player>;
  private kingdomList: Array<Kingdom>;

  constructor(cells: Array<Cell>, players: Array<any>, kingdoms: Array<any>) {
    this.cellList = cells;
    this.playerList = players;
    this.kingdomList = kingdoms;
  }

  get cell(): Array<Cell> {
    return this.cellList;
  }

  get villages(): Array<Cell> {
    return this.cellList.filter(cell => cell.village);
  }

  get tiles(): Array<Cell> {
    return this.cellList.filter(cell => !cell.village && cell.resType);
  }

  get oasis(): Array<Cell> {
    return this.cellList.filter(cell => cell.oasis);
  }

  get wilderness(): Array<Cell> {
    return this.cellList.filter(cell => !cell.oasis && !cell.resType);
  }

  get players(): Array<Player> {
    return this.playerList
  }

  get inactivePlayers(): Array<Player> {
    return this.playerlist.filter(player => player.active === '0')
  }

  get kingdoms(): Array<Kingdom> {
    return this.kingdomList
  }
}

export default Map;
