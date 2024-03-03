import express from "express";
import isToken from "../../middlewares/isToken.js";

const contactRouter = express.Router();

contactRouter.get("/", isToken);

export default contactRouter;
