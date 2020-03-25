import { RegionIds } from "../interface";
import { convertToCellId, range } from "./utilities";

export const userAgent = {
  "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:73.0) Gecko/20100101 Firefox/73.0",
};

function generateRegionIds(): RegionIds {
  const regionIds: RegionIds = {};
  let regionId: string;

  for (let x of range(-13, 14)) {
    for (let y of range(-13, 14)) {
      regionId = convertToCellId(x, y);
      regionIds[regionId] = [];

      for (let xx of range(0 + x * 7, 7 + x * 7)) {
        for (let yy of range(0 + y * 7, 7 + y * 7)) {
          regionIds[regionId].push(convertToCellId(xx, yy));
        }
      }
    }
  }

  return regionIds;
}

export const regionIds = generateRegionIds();
