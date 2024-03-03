import { Schema, model } from "mongoose";

const patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const contactSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    phone: {
        type:String,
        required String,
    },
    email: String

})

const Contact = model("contact", contactSchema)

export default Contact