import { model } from "mongoose";
import productSchema from "../Schemas/productSchema.js";
import userSchema from "../Schemas/userSchema.js";
import reviewSchema from "../Schemas/reviewSchema.js";
import WebUserSchema from "../Schemas/webUserSchema.js";

export let Product = model("Product",productSchema)
export let User = model("User",userSchema)
export let Review = model("Review",reviewSchema)
export let WebUser = model("WebUser",WebUserSchema)