import Contact from "../schemas/User.js";
import HttpError from "../helpers/HttpError.js";

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

const add = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};
