import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken"
import { secretKey } from "../utils/constant.js";
const isAuthenticated = expressAsyncHandler((req,res,next) => {
    let bearerToken = req.headers.authorization

    if(bearerToken){
        let token = bearerToken.split(" ")[1]
        console.log(token);
      
        let infoObj = jwt.verify(token,secretKey) 
        let id = infoObj._id
        req.id=id
        next()
    }
    else{
        res.status(401).json({
            success: false,
            message:"Please login"
        })
    }
})

export default isAuthenticated