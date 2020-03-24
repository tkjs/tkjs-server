import axios from "axios";
import { AxiosInstance, AxiosResponse } from "axios";

import URL from "./url";
import store from "../store";
import { userAgent } from "../constants";
import { extractor } from "../utilities";
import { SessionInterface } from "../../interface";
import { updateState, resetState, resetWorldname } from "../store";

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
}

export default Gameworld;
