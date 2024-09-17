import { Schema } from "mongoose";


let reviewSchema = Schema({
    product: {
        type: Schema.ObjectId,
        ref:"Product",
        required: [true, "product is required"]
    },
    user: {
        type: Schema.ObjectId,
        ref:"User",
        required: [true, "User is required"]
    },
    description: {
        type: String,
        required: [true, "Description is a required field "]
    },
 
})

export default reviewSchema;