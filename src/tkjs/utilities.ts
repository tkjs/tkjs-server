export function range(_p: number, _t?: number, _s?: number): Array<number> {
  /**
   * @param <_p> Return a list integers of zero until <_p> value.
   * @param <_t> Return a list integers of <_t> until <_p> value.
   * @param <_s> Return a list integers of <_t> until <_p> with steps <_s> value.
   * @return Return a array list
   */

  let start: number = _t ? _p : 0;
  let stop: number = _t ? _t : _p;
  let step: number = _s ? _s : 1;

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

export function convertToCoordinate(cellId: string): Array<number> {
  let binary: string = parseInt(cellId, 10).toString(2);

  if (binary.length < 30) binary = "0" + binary;

  const xcord: string = binary.slice(15);
  const ycord: string = binary.slice(0, 15);

  const realx: number = parseInt(xcord, 2) - 16384;
  const realy: number = parseInt(ycord, 2) - 16384;

  return [realx, realy];
}
