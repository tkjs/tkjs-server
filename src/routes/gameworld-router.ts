import { Router } from "express";

import GameworldController from "../controllers/gameworld-controller";

const router: Router = Router();

router.get("/", GameworldController.getState);
router.get("/own-villages", GameworldController.getOwnVillages);
router.post("/authenticate", GameworldController.authenticate);
router.patch("/logout", GameworldController.resetState);

export default router;
