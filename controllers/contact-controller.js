import HttpError from "../helpers/HttpError.js";
import Contact from "../schemas/Contact.js";

const getAllContacts = async (req, res, next) => {
  const { _id: id } = req.user;
  const resul = await Contact.find({ owner: id });

  res.json(resul);
};

const getbyId = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: id } = req.user;
  const result = await Contact.findOne({ _id: contactId, owner: id });
  if (!result) {
    return next(HttpError(404, "Not found"));
  }
  res.json(result);
};

const addContacts = async (req, res) => {
  const result = await Contact.create({ ...req.body, owner: req.user._id });

  res.status(201).json(result);
};

const deletContact = async (req, res) => {
  const { contactId } = req.params;
  const { _id: ownerId } = req.user;
  const result = await User.findOneAndDelete({
    _id: contactId,
    owner: ownerId,
  });

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
