import express from "express";
import isToken from "../../middlewares/isToken.js";
import isEmpleBody from "../../middlewares/isEmplyBody.js";
import contactsControler from "../../controllers/contact-controller.js";

const contactRouter = express.Router();

contactRouter.get("/", isToken, contactsControler.getAllContacts);

contactRouter.get("/:contactId", isToken, contactsControler.getbyId);

contactRouter.post("/", isToken, isEmpleBody, contactsControler.addContacts);

contactRouter.delete("/", isToken, contactsControler.getAllContacts);

export default contactRouter;
