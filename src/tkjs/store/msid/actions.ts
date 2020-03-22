import { UPDATE_MSID, RESET_MSID, MsidAction } from "./types";

export function updateMsid(msid: string): MsidAction {
  return {
    type: UPDATE_MSID,
    msid
  };
}

export function resetMsid(): MsidAction {
  return {
    type: RESET_MSID
  };
}
