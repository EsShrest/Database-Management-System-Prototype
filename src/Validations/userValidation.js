import Joi from "joi"

let userValidation = Joi.object().keys({
    name:Joi.string().required().messages({
        "any.required":"name is required",
    }).allow(""),
    // age:Joi.string().required().custom((value,msg)=>{
    //     if (value>=18){
    //         return true
    //     }
    //     else{
    //         return msg.message("Age must be atleast 18")
    //     }
    // }),
    password:Joi.string().required(),
    phoneNumber:Joi.number().required().min(18).max(999),
    email:Joi.string().required().custom((value,msg)=> {
        let validEmail = value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)

        if(validEmail){
            return true
        }
        else{
            return msg.message("Not a valid email")
        }
    }),
    gender:Joi.string().required().valid("Male","Female","Other")

}).unknown(true)

export default userValidation