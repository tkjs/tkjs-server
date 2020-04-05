import { Session } from "../../interface";
import { UPDATE_SESSION, RESET_SESSION, SessionAction } from "./types";

export function updateSession(name: string, session: Session): SessionAction {
  return {
    name,
    session,
    type: UPDATE_SESSION,
  };
}

export function resetSession(name: string): SessionAction {
  return {
    name,
    type: RESET_SESSION,
  };
}
