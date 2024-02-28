import express from "express";
import authController from "../../controllers/auth-controller.js";

const authRouter = express.Router();

authRouter.post("/signup", authController.creatUser);

authRouter.post("/login", authController.loginUser);

authRouter.get("/currant", authController.currentUser);

authRouter.post("/logout", authController.logoutUser);
export default authRouter;
