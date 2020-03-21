import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";

class GameworldController {
  static getState(req: Request, res: Response, next: NextFunction) {
    res.json({ message: "Welcome to gameworld controller with root route" });
  }
  static async getOwnVillages(req: Request, res: Response, next: NextFunction) {
    res.json({
      message: "Welcome to gameworld controller with own-villages route"
    });
  }
  static async authenticate(req: Request, res: Response, next: NextFunction) {
    res.json({
      message: "Welcome to gameworld controller with authenticate route"
    });
  }
  static resetState(req: Request, res: Response, next: NextFunction) {
    res.json({ message: "Welcome to gameworld controller with logout route" });
  }
}

export default GameworldController;
