import axios from "axios";
import { AxiosInstance, AxiosResponse } from "axios";

import URL from "./url";
import store from "../store";
import { extractor, range } from "../utilities";
import { SessionNotFoundError } from "../errors";
import { userAgent, regionIds } from "../constants";
import { updateState, resetState, resetWorldname } from "../store";
import { SessionInterface, RequestPayloadInterface, StoreInterface } from "../../interface";

import Map from "../map";

class Gameworld {
  static driver: AxiosInstance = axios.create({ headers: { ...userAgent } });

  static async authenticate(gameworldId: string, worldname: string): Promise<void> {
    try {
      let token: string;
      let gameworld: SessionInterface = { session: "", cookie: "", age: new Date() };
      let response: AxiosResponse;

      updateState("account", { worldname });

      response = await Gameworld.driver.get(URL.GENERATE_GAMEWORLD_TOKEN(gameworldId));
      token = extractor({ type: "token", value: response.data });

      response = await Gameworld.driver.get(URL.GENERATE_GAMEWORLD_SESSION(token), {
        maxRedirects: 0,
        validateStatus: status => status >= 200 && status < 303,
      });

      // extract cookie
      response.headers["set-cookie"].forEach((cookieStr: string) => {
        if (cookieStr.includes("t5SessionKey")) {
          gameworld.session = cookieStr.split(";")[0];
          gameworld.age = extractor({ type: "session age", value: cookieStr });
        }
        gameworld.cookie += cookieStr.split(";")[0] + "; ";
      });
      gameworld.session = extractor({ type: "session", value: gameworld.session });
      updateState("gameworld", gameworld);

      // authentication done
    } catch (err) {
      resetState("gameworld");
      resetWorldname();

      throw err;
    }
  }

  static async hitServer({ action, controller, params }: RequestPayloadInterface): Promise<any> {
    const { msid, lobby, gameworld }: StoreInterface = store.getState();
    const { cookie: lobbyCookie }: SessionInterface = lobby;
    const { cookie: gameworldCookie, session: gameworldSession }: SessionInterface = gameworld;

    if (!msid || !lobbyCookie || !gameworldCookie || !gameworldSession) {
      throw new SessionNotFoundError();
    }

    const cookie: string = lobbyCookie + msid + "; " + gameworldCookie;
    const query: string = `/?c=${controller}&a=${action}&t${Date.now()}`;

    const response: AxiosResponse = await Gameworld.driver.post(
      URL.GAMEWORLD_API + query,
      { action, controller, params, session: gameworldSession },
      { headers: { cookie } }
    );

    return response.data;
  }

  static async getCache(params: any): Promise<any> {
    const payload: RequestPayloadInterface = {
      action: "get",
      controller: "cache",
      params,
    };

    const data: any = await Gameworld.hitServer(payload);
    return data;
  }

  static async getOwnVillageList(): Promise<Array<any>> {
    const data: any = await Gameworld.getCache({ names: ["Collection:Village:own"] });
    return data.cache[0].data.cache.map((village: any) => village.data); // only need village data
  }

  static async getMap(regionList: Array<string> = Object.keys(regionIds)): Promise<any> {
    const req_list: { [id: string]: Array<string> } = { "1": regionList };

    const payload: RequestPayloadInterface = {
      action: "getByRegionIds",
      controller: "map",
      params: {
        regionIdCollection: req_list,
      },
    };

    const response: any = await Gameworld.hitServer(payload);

    let cellList: Array<any> = [];
    let playerList: Array<any> = [];
    let kingdomList: Array<any> = [];

    // collecting cell
    // response.response['1'].region is an object with key is regionId and value is another object
    cellList = Object.keys(response.response["1"].region).reduce(
      (result: Array<any>, regionId: string) => {
        // response.response['1'].region[regionId] is an object with value is array of object literal
        return [...result, ...response.response["1"].region[regionId]];
      },
      []
    );

    // collecting player
    // response.response['1'].player is an object with key is playerId and value is object literal
    playerList = Object.keys(response.response["1"].player).map((playerId: string) => {
      return { ...response.response["1"].player[playerId], playerId };
    });

    // collecting kingdom
    // response.response['1'].kingdom is an object with key is kingdomId and value is object literal
    kingdomList = Object.keys(response.response["1"].player).map((kingdomId: string) => {
      return { ...response.response["1"].kingdom[kingdomId], kingdomId };
    });

    return new Map(cellList, playerList, kingdomList);
  }
}

export default Gameworld;
