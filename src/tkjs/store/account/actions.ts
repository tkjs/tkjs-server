import { AccountInterface } from "../../../interface";
import { UPDATE_ACCOUNT, RESET_ACCOUNT, AccountAction } from "./types";

export function updateAccount(account: AccountInterface): AccountAction {
  return {
    type: UPDATE_ACCOUNT,
    account
  };
}

export function resetAccount(): AccountAction {
  return {
    type: RESET_ACCOUNT
  };
}