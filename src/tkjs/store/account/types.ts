import { AccountInterface } from "../../../interface";

export const UPDATE_ACCOUNT = "UPDATE_ACCOUNT";
export const RESET_ACCOUNT = "RESET_ACCOUNT";

export interface UpdateAccount {
  type: typeof UPDATE_ACCOUNT;
  account: AccountInterface;
}

export interface ResetAccount {
  type: typeof RESET_ACCOUNT;
}

export type AccountAction = UpdateAccount | ResetAccount;
