import cors from "cors";
import morgan from "morgan";
import express from "express";
import { Application } from "express";

import routes from "./routes";
import errorHandler from "./middlewares/error-handler";

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(morgan("tiny"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(errorHandler);
  }

  private routes(): void {
    this.app.use("/", routes);
  }

  public run(): void {
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => console.log("listening on port", port));
  }
}

export default new App();
