export const UPDATE_MSID = "UPDATE_MSID";
export const RESET_MSID = "RESET_MSID";

export interface UpdateMsid {
  type: typeof UPDATE_MSID;
  msid: string;
}

export interface ResetMsid {
  type: typeof RESET_MSID;
}

export type MsidAction = UpdateMsid | ResetMsid;
