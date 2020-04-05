import { Account } from "../../interface";

export const UPDATE_ACCOUNT = "UPDATE_ACCOUNT";
export const RESET_ACCOUNT = "RESET_ACCOUNT";
export const RESET_WORLDNAME = "RESET_WORLDNAME";

export interface UpdateAccount {
  type: typeof UPDATE_ACCOUNT;
  account: Account;
}

export interface ResetAccount {
  type: typeof RESET_ACCOUNT;
}

export interface ResetWorldname {
  type: typeof RESET_WORLDNAME;
}

export type AccountAction = UpdateAccount | ResetAccount | ResetWorldname;
