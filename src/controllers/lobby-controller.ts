import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";

class LobbyController {
  static getState(req: Request, res: Response, next: NextFunction) {
    res.json({ message: "Welcome at lobby controller with root route" });
  }

  static async getAvatarList(req: Request, res: Response, next: NextFunction) {
    res.json({ message: "Welcome at lobby controller with avatar-list route" });
  }

  static async authenticate(req: Request, res: Response, next: NextFunction) {
    res.json({
      message: "Welcome to lobby controller with authenticate route"
    });
  }

  static resetState(req: Request, res: Response, next: NextFunction) {
    res.json({ message: "Welcome to lobby controller with logout route" });
  }
}

export default LobbyController;
