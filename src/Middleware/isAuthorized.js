import expressAsyncHandler from "express-async-handler";
import { WebUser } from "../Models/models.js"

let isAuthorized = (roles) => {
    return expressAsyncHandler(async(req,res,next) => {
        let _id = req.id

        let result = await WebUser.findById(_id)

        if(roles.include(result.role)){
            next()
        }
        else{
            res.status(403).json({
                success:false,
                message:"user not authorized"
            })
        }
    })
}

export default isAuthorized