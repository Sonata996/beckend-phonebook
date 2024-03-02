import express from "express";
import authController from "../../controllers/auth-controller.js";
import isEmpleBody from "../../middlewares/isEmplyBody.js";
import isToken from "../../middlewares/isToken.js";

const authRouter = express.Router();

authRouter.post("/signup", isEmpleBody, authController.creatUser);

authRouter.post("/login", isToken, isEmpleBody, authController.loginUser);

authRouter.get("/currant", isToken, authController.currentUser);

authRouter.post("/logout", authController.logoutUser);
export default authRouter;
