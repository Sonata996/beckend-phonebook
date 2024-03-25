import { Schema, model } from "mongoose";

const patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const Contact = model("contact", contactSchema);

export default Contact;
