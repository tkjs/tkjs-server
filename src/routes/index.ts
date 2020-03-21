import { Router } from "express";
import { Request } from "express";
import { Response } from "express";

import lobbyRouter from "./lobby-router";
import gameworldRouter from "./gameworld-router";

const router: Router = Router();

router.get("/", function(req: Request, res: Response) {
  res.json({ message: "Server alive!" });
});
router.use("/lobby", lobbyRouter);
router.use("/gameworld", gameworldRouter);

export default router;
