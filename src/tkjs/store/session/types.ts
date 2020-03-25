import { Session } from "../../../interface";

export const UPDATE_SESSION = "UPDATE_SESSION";
export const RESET_SESSION = "RESET_SESSION";

export interface UpdateSession {
  name: string;
  session: Session;
  type: typeof UPDATE_SESSION;
}

export interface ResetSession {
  name: string;
  type: typeof RESET_SESSION;
}

export type SessionAction = UpdateSession | ResetSession;
export type SessionReducer = (state: Session, action: SessionAction) => Session;
