import Contact from "../schemas/User.js";
import HttpError from "../helpers/HttpError.js";
import User from "../schemas/User.js";

const getAllContacts = async (req, res, next) => {
  const resul = await Contact.find();
  res.json(resul);
};

const getbyId = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findOne(contactId);
  if (!result) {
    return next(HttpError(404, "Not found"));
  }
  res.json(result);
};

const addContacts = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const deletContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await User.findOneAndDelete(contactId);

  if (!result) {
    return next(HttpError(404, "Not found"));
  }
  res.json({ message: "contact deleted" });
};

export default {
  getAllContacts,
  getbyId,
  addContacts,
};
