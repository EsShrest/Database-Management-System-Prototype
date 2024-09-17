import { Schema } from "mongoose";


let userSchema = Schema({
    name: {
        type: String,
        // required: [true, "name is required"]
    },
    password: {
        type: String,
        // required: [true, "Pass is required"]
    },
    phoneNumber: {
        type: Number,
        // required: [true, "Number is a required field "]
    },
    email: {
        type: String,
        unique:true,
    //     required: [true,"email is required"]
    },
    gender: {
        type: String,
        // required: [true,"gender is required"]
    }
})

export default userSchema;