import { Router } from "express";
import { Request } from "express";
import { Response } from "express";

const router: Router = Router();

router.get("/", function(req: Request, res: Response) {
  res.json({ message: "Welcome to gameworld root route" });
});
router.get("/own-villages", function(req: Request, res: Response) {
  res.json({ message: "Welcome to gameworld own-village route" });
});
router.post("/authenticate", function(req: Request, res: Response) {
  res.json({ message: "Welcome to gameworld authenticate route" });
});
router.patch("/logout", function(req: Request, res: Response) {
  res.json({ message: "Welcome to gameworld logout route" });
});

export default router;
