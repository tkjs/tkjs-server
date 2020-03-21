import cors from "cors";
import express from "express";
import { Request } from "express";
import { Response } from "express";
import { Application } from "express";

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.app.use("/", function(req: Request, res: Response) {
      res.json({ message: "Server alive" });
    });
  }

  public run(): void {
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => console.log("listening on port", port));
  }
}

export default new App();
