import { Router } from "express";
import * as controller from "../controllers/authController.js";
var authRouter = Router();
authRouter.post("/signup", controller.signup);
authRouter.get("/signin", controller.signin);
authRouter.get("/authentication", controller.access);
export default authRouter;
