import { SessionInterface } from "../../../interface";
import { UPDATE_SESSION, RESET_SESSION, SessionAction, SessionReducer } from "./types";

const initState: SessionInterface = {
  session: "",
  cookie: "",
  age: new Date(),
};

function sessionReducer(state = initState, action: SessionAction): SessionInterface {
  switch (action.type) {
    case UPDATE_SESSION:
      return {
        ...state,
        ...action.session,
      };
      break;

    case RESET_SESSION:
      return {
        session: "",
        cookie: "",
        age: new Date(),
      };
      break;

    default:
      return state;
  }
}

export default function createNamedWrapperReducer(reducerName: string): SessionReducer {
  return function (state: SessionInterface, action: SessionAction): SessionInterface {
    const { name } = action;
    const isInitializationCall: boolean = state === undefined;
    if (name !== reducerName && !isInitializationCall) return state;
    return sessionReducer(state, action);
  };
}
