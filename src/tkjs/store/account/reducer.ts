import { AccountInterface } from "../../../interface";
import { UPDATE_ACCOUNT, RESET_ACCOUNT, AccountAction } from "./types";

const initState: AccountInterface = {
  email: "",
  password: "",
  worldname: ""
};

export default function accountReducer(
  state = initState,
  action: AccountAction
): AccountInterface {
  switch (action.type) {
    case UPDATE_ACCOUNT:
      return {
        ...state,
        ...action.account
      };
      break;

    case RESET_ACCOUNT:
      return {
        email: "",
        password: "",
        worldname: ""
      };
      break;

    default:
      return state;
  }
}
