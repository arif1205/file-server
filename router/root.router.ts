import { Router } from "express";
import uploadRouter from "./upload.router";

const rootRouter = Router();

rootRouter.use("/upload", uploadRouter);

export default rootRouter;
