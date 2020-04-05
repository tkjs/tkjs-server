import { Account } from "../../interface";
import { UPDATE_ACCOUNT, RESET_ACCOUNT, RESET_WORLDNAME, AccountAction } from "./types";

const initState: Account = {
  email: "",
  password: "",
  worldname: "",
};

export default function accountReducer(state = initState, action: AccountAction): Account {
  switch (action.type) {
    case UPDATE_ACCOUNT:
      return {
        ...state,
        ...action.account,
      };
      break;

    case RESET_WORLDNAME:
      return {
        ...state,
        worldname: "",
      };
      break;

    case RESET_ACCOUNT:
      return {
        email: "",
        password: "",
        worldname: "",
      };
      break;

    default:
      return state;
  }
}
