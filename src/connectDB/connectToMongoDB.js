import mongoose from "mongoose";
import { db_url } from "../utils/constant.js";


const connectToMongoDB = () => {
    try {
        mongoose.connect(db_url)
         console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
    
}

export default connectToMongoDB;