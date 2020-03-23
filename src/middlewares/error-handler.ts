import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";

export default function(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  res.status(500).json(err);
}
