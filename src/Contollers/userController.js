import bcrypt from "bcrypt";
import expressAsyncHandler from "express-async-handler";
import { createUserService, deleteUserService, loginUserService, readAllUserService, readSpecificUserService, updateUserService } from "../Services/userServices.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendMail.js";
import { secretKey } from "../utils/constant.js";

export const createUserController = expressAsyncHandler(async(req,res,next) => {
  let data = req.body
  let hashPass  = await bcrypt.hash(data.password, 10)
  data.password = hashPass  
  let result = await createUserService(req.body);

  await sendEmail({
    from: 'Unique <uniquekc425@gmail.com>',
      to: [req.body.email],
      subject: "Registration Email",
      html: `<h1>Hello! You have succesfully registered in the HW15 system!</h1>`,
    });

    res.json({
      success:true,
      message: "User created succesfully",
      result:result
    })
  })

  export const readAllUserController = expressAsyncHandler(async(req,res,next) => {
   
      let result = await readAllUserService()
   
    res.json({
      success:true,
      message:"Users read successfully.",
      result:result
    })
      
    })
    
    

  export const readSpecificUserController = expressAsyncHandler(async(req,res,next) => {
    
      let result = await readSpecificUserService(req.params.id)
   
    res.json({
      success:true,
      message:"User read successfully.",
      result:result
    })
    
  })

  export const updateUserController = expressAsyncHandler(async(req,res,next) => {
      let result = await updateUserService(req.params.id,req.body)
   
    res.json({
      success:true,
      message:"Users read successfully.",
      result:result
    }) 
  })

  export const deleteUserController = expressAsyncHandler(async(req,res,next) => {
      let result = await deleteUserService(req.params.id)
   
    res.json({
      success:true,
      message:"User deleted successfully.",
      result:result
    })
  })


  export const loginUserController = expressAsyncHandler(
    async (req, res, next) => {
      let result = await loginUserService(req.body.email);
      // output of findOne is either { }  or null
  
      if (result === null) {
        res.status(404).json({
          success: false,
          message: "Credential does not match.",
        });
      } else {
        let isValidPassword = await bcrypt.compare(
          req.body.password,
          result.password
        );
        if (isValidPassword) {
          /* 
          generate token
          send token to postman
          
          */
          let info = {
            id: result._id,
          };

          let expiryInfo = {
            expiresIn: "365d",
          };
  
          let token = jwt.sign(info, secretKey, expiryInfo);
          console.log(token);
  
          res.json({
            success: true,
            message: "login successful.",
            result: token,
          });
        } else {
          res.status(400).json({
            success: false,
            message: "Credential does not match.",
          });
        }
      }
    }
  );

export const myProfileController = expressAsyncHandler(async(req,res,next) => {
  let result = await readSpecificUserService(req.id)
  res.json({
    success:true,
    message:"User read successfully",
    result:result
  })


/*

send token from pstman
get token from postman
verify token
  if nto verify thweo error 
  else
    get id from token
  get profile from useer
  senfd profile info

*/

})
    /*
    Cehck if email exis in db
    throw error if not 
      if yes check passowrd
    */
