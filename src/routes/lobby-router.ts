import { Router } from "express";

import LobbyController from "../controllers/lobby-controller";

const router: Router = Router();

router.get("/", LobbyController.getState);
router.get("/avatar-list", LobbyController.getAvatarList);
router.post("/authenticate", LobbyController.authenticate);
router.patch("/logout", LobbyController.resetState);

export default router;
