import { CoordinateInterface } from "../interface";
import { ExtractorNotFoundError, UndefinedTypeError } from "./errors";

export function range(_p: number, _t?: number, _s?: number): Array<number> {
  /**
   * @param <_p> Return a list integers of zero until <_p> value.
   * @param <_t> Return a list integers of <_t> until <_p> value.
   * @param <_s> Return a list integers of <_t> until <_p> with steps <_s> value.
   * @return Return a array list
   */

  let start: number = _t !== undefined ? _p : 0;
  let stop: number = _t !== undefined ? _t : _p;
  let step: number = _s !== undefined ? _s : 1;

  let t: Array<number> = [];
  for (let i = start; i < stop; i = i + step) {
    t.push(i);
  }

  return t;

  // https://gist.github.com/gutierri/a0d8972a29dfc0a9a559fb7f88d8f409
}

export function convertToCellId(x: number, y: number): string {
  const rx: number = 536887296 + x;
  const ry: number = y * 32768;

  return String(rx + ry);
}

export function convertToCoordinate(cellId: string): CoordinateInterface {
  let binary: string = parseInt(cellId, 10).toString(2);

  if (binary.length < 30) binary = "0" + binary;

  const xcord: string = binary.slice(15);
  const ycord: string = binary.slice(0, 15);

  const realx: number = parseInt(xcord, 2) - 16384;
  const realy: number = parseInt(ycord, 2) - 16384;

  return { x: realx, y: realy };
}

export function extractMsid(source: string): string {
  const msid: any = /msid=([\w]*)&msname/g.exec(source);
  if (!msid) throw new ExtractorNotFoundError("MSID not found");
  return msid[1];
}

export function extractToken(source: string): string {
  const token: any = /token=([\w]*)&msid/g.exec(source);
  if (!token) throw new ExtractorNotFoundError("Token not found");
  return token[1];
}

export function extractSession(source: string): string {
  const session: any = /%7B%22key%22%3A%22([\w]*)%22%2C%22/g.exec(source);
  if (!session) throw new ExtractorNotFoundError("Session not found");
  return session[1];
}

export function extractSessionAge(source: string): Date {
  return new Date(source.split(";")[1].split("=")[1]);
}

export function extractor({ type, value }: { type: string; value: any }): any {
  switch (type) {
    case "msid":
      return extractMsid(value);
      break;

    case "token":
      return extractToken(value);
      break;

    case "session":
      return extractSession(value);
      break;

    case "session age":
      return extractSessionAge(value);
      break;

    default:
      throw new UndefinedTypeError(`Undefined extractor type: ${type}`);
  }
}

export function distance(source: CoordinateInterface, target: CoordinateInterface): number {
  return Math.sqrt((source.x - target.x) ** 2 + (source.y - target.y) ** 2);
}
