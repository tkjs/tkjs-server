import { Router } from "express";
import { Request } from "express";
import { Response } from "express";

const router: Router = Router();

router.get("/", function(req: Request, res: Response) {
  res.json({ message: "Welcome to lobby root route" });
});
router.get("/avatar-list", function(req: Request, res: Response) {
  res.json({ message: "Welcome to lobby avatar list route" });
});
router.post("/authenticate", function(req: Request, res: Response) {
  res.json({ message: "Welcome to lobby authenticate route" });
});
router.patch("/logout", function(req: Request, res: Response) {
  res.json({ message: "Welcome to lobby logout route" });
});
export default router;
