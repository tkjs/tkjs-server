import { combineReducers, createStore } from "redux";

import msid from "./msid/reducer";
import account from "./account/reducer";
import createSession from "./session/reducer";

import * as msidAction from "./msid/actions";
import * as accountAction from "./account/actions";
import * as sessionAction from "./session/actions";

import { UndefinedTypeError } from "../errors";

const rootReducer = combineReducers({
  msid,
  account,
  lobby: createSession("lobby"),
  gameworld: createSession("gameworld")
});

const store = createStore(rootReducer);

export default store;

export function updateState(type: string, value: any): void {
  switch (type) {
    case "msid":
      store.dispatch(msidAction.updateMsid(value));
      break;

    case "account":
      store.dispatch(accountAction.updateAccount(value));
      break;

    case "lobby":
      store.dispatch(sessionAction.updateSession("lobby", value));
      break;

    case "gameworld":
      store.dispatch(sessionAction.updateSession("gameworld", value));
      break;

    default:
      throw new UndefinedTypeError(`Undefined update state type: ${type}`);
  }
}

export function resetState(type: string): void {
  switch (type) {
    case "msid":
      store.dispatch(msidAction.resetMsid());
      break;

    case "account":
      store.dispatch(accountAction.resetAccount());
      break;

    case "lobby":
      store.dispatch(sessionAction.resetSession("lobby"));
      break;

    case "gameworld":
      store.dispatch(sessionAction.resetSession("gameworld"));
      break;

    default:
      throw new UndefinedTypeError(`Undefined reset state type: ${type}`);
  }
}
