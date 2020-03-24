import { UPDATE_MSID, RESET_MSID, MsidAction } from "./types";

const initState: string = "";

export default function msidReducer(state = initState, action: MsidAction): string {
  switch (action.type) {
    case UPDATE_MSID:
      return action.msid;
      break;

    case RESET_MSID:
      return "";
      break;

    default:
      return state;
  }
}
