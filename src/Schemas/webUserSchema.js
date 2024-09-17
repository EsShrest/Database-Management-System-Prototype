import { Schema } from "mongoose";


let WebUserSchema = Schema({
    name: {
        type: String,
        required: [true, "name field is required."],
      },
      email: {
        type:String,
        required: [true, "Must enter a valid email"]
      },
      password: {
        type: String,
        required: [true, "password field is required."],
      },
      dob: {
        type: Date,
        required: [true, "dob field is required."],
      },
      gender: {
        type: String,
      },
      role: {
        type: String,
        requried: [true, "Role field is required"]
      },
      isVerifiedEmail: {
        type: Boolean,
        // required: [true, "IsVerified is required"]
      }
    },{timestamps:true})

export default WebUserSchema;