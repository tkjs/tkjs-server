import qs from "qs";
import axios from "axios";
import { AxiosInstance, AxiosResponse } from "axios";

import URL from "./url";
import store from "../store";
import { userAgent } from "../constants";
import { extractor } from "../utilities";
import { SessionNotFoundError } from "../errors";
import { updateState, resetState } from "../store";
import { SessionInterface, RequestPayloadInterface, StoreInterface } from "../../interface";

class Lobby {
  static driver: AxiosInstance = axios.create({ headers: { ...userAgent } });

  static async authenticate(email: string, password: string): Promise<void> {
    try {
      let msid: string;
      let token: string;
      let lobby: SessionInterface = { session: "", cookie: "", age: new Date() };
      let response: AxiosResponse;

      response = await Lobby.driver.get(URL.GET_MSID);
      msid = extractor({ type: "msid", value: response.data });
      updateState("msid", msid);

      response = await Lobby.driver.post(
        URL.GENERATE_LOBBY_TOKEN(),
        qs.stringify({ email, password }),
        { headers: { "content-type": "application/x-www-form-urlencoded" } }
      );
      token = extractor({ type: "token", value: response.data });

      response = await Lobby.driver.get(URL.GENERATE_LOBBY_SESSION(token), {
        maxRedirects: 0,
        validateStatus: status => status >= 200 && status < 303,
      });
      updateState("account", { email, password });

      // extract cookie
      response.headers["set-cookie"].forEach((cookieStr: string) => {
        if (cookieStr.includes("gl5SessionKey") && !lobby.session) {
          lobby.session = cookieStr.split(";")[0].split(";")[0];
          lobby.age = extractor({ type: "session age", value: cookieStr });
        }
        lobby.cookie += cookieStr.split(";")[0] + "; ";
      });
      lobby.session = extractor({ type: "session", value: lobby.session });
      updateState("lobby", lobby);

      // authentication done
    } catch (err) {
      resetState("msid");
      resetState("account");
      resetState("lobby");

      throw err;
    }
  }

  static async hitServer({ action, controller, params }: RequestPayloadInterface): Promise<any> {
    const { msid, lobby }: StoreInterface = store.getState();
    const { session, cookie: lobbyCookie }: SessionInterface = lobby;

    if (!msid || !session || !lobbyCookie) throw new SessionNotFoundError();

    const cookie = lobbyCookie + msid;

    const response: AxiosResponse = await Lobby.driver.post(
      URL.LOBBY_API,
      { action, controller, params, session },
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

    const data: any = await Lobby.hitServer(payload);
    return data;
  }

  static async getAvatarList(): Promise<Array<any>> {
    const data: any = await Lobby.getCache({ names: ["Collection:Avatar"] });
    return data.cache[0].data.cache.map((avatar: any) => avatar.data); // only need avatar data
  }
}

export default Lobby;
