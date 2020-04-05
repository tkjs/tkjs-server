import { Session } from "../../interface";
import { UPDATE_SESSION, RESET_SESSION, SessionAction, SessionReducer } from "./types";

const initState: Session = {
  session: "",
  cookie: "",
  age: new Date(),
};

function sessionReducer(state = initState, action: SessionAction): Session {
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
  return function (state: Session, action: SessionAction): Session {
    const { name } = action;
    const isInitializationCall: boolean = state === undefined;
    if (name !== reducerName && !isInitializationCall) return state;
    return sessionReducer(state, action);
  };
}
