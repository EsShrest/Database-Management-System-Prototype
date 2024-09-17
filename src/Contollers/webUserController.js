import bcrypt from "bcrypt";
import expressAsyncHandler from "express-async-handler";
import { createWebUserService, deleteWebUserService, loginWebUserService, readAllWebUserService, readSpecificWebUserService, updateWebUserService } from "../Services/webUserServices.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendMail.js";
import { secretKey } from "../utils/constant.js";
import { WebUser } from "../Models/models.js";
import { use } from "bcrypt/promises.js";
import e from "express";

export const createWebUserController = expressAsyncHandler(async(req,res,next) => {
  let data = req.body
  let hashedPassword = await bcrypt.hash(data.password,10)
  data = {
    ...data,
    password: hashedPassword,
    isVerifiedEmail: false
  }
  let result = await createWebUserService(data)

  let info = {
    id: result._id,
  };

  let expiryInfo = {
    expiresIn: "5d",
  };

  let token = jwt.sign(info, secretKey, expiryInfo);
  console.log(token);

  await sendEmail({
    from: 'Unique <uniquekc425@gmail.com>',
      to: [data.email],
      subject: "Registration Email",
      html: `<h1>Hello! You have succesfully registered in the HW15 system!</h1>
      <a href="http://localhost:3000/admin/verify-email?token=${token}">
      http://localhost:3000/admin/verify-email?token=${token}
      </a>`,

    });

  res.json({
    success:true,
    message:"webUser created succesfully",
    result:result
  })
  })

  export const verifyEmail = expressAsyncHandler(async(req,res,next) => {
    let tokenString = req.headers.authorization
    let token = tokenString.split(" ")[1]
    
    let infoObj = await jwt.verify(token,secretKey)

    let userID = infoObj.id

    console.log(tokenString)
    console.log(token)
    console.log(userID)

    let result = await WebUser.findByIdAndUpdate(userID, {isVerifiedEmail:true} ,{new:true})

    res.json({
      success: true,
      message:"webUser email verfied",
      data:token
    })
  })

  export const loginUser = expressAsyncHandler(async(req,res,next) => {
    let email = req.body.email
    let password = req.body.password

    let user = await WebUser.findOne({email:email})

    if (user){
      if(user.isVerifiedEmail){
        let isValidPassword = await bcrypt.compare(password,user.password)

        if (isValidPassword){
          console.log(user)
          let infoObj = {
            _id: user._id
          }
          let expiryInfo = {
            expiresIn:"1d"
          }
          let token = await jwt.sign(infoObj,secretKey,expiryInfo)

          res.json({
            success:true,
            message:"Login Succesful",
            data: token
          })
        }
        else{
          let error = new Error("Credential not found")
          throw error
        }
      }
      else{
        let error = new Error("Credential not found")
        throw error
      }
    }
    else{
      let error = new Error("Credential not found")
      throw error
    }
  })

  export const myProfile = expressAsyncHandler(async(req,res,next) => {
    let _id = req.id
    let result = await WebUser.findById(_id)

    res.json({
      success: true,
      message: "Profile read succesfully",
      data: result
    })
  })
  
  export const updateProfile = expressAsyncHandler(async(req,res,next) => {
    let _id = req.id
    console.log(_id)
    let data = req.body
    console.log(data)
    delete data.email
    delete data.password

    let result = await WebUser.findByIdAndUpdate(_id, data ,{new:true})


    res.json({
      success:true,
      message:"Profile updated ",
      data: result
    })
  })

  export const updatePassword = expressAsyncHandler(async(req,res,next) => {
    let _id = req.id
    console.log(_id)
    let oldPassword = req.body.oldPassword
    let newPassword = req.body.newPassword
    console.log(oldPassword)
    console.log(newPassword)

    let data = await WebUser.findById(_id)
    console.log(data)

    let isValidPassword = await bcrypt.compare(oldPassword,data.password)

    if (isValidPassword){
      let newHashPassword = await bcrypt.hash(newPassword,10)

      let result = await WebUser.findByIdAndUpdate(_id,{
        password: newHashPassword
      },{new:true})

      res.json({
        success:true,
        message:"Password changed Succesfully",
        data:result
      })
    }
    else{
      let error = new Error("Credential does not match")
      throw error
    }
  })

  export const forgotPassword = expressAsyncHandler(async(req,res,next) => {
    let email = req.body.email
     
    let result = WebUser.findOne({email:email})

    if (result){
      let infoObj = {
        _id: req.id

      }
      let expiryInfo = {
        expiresIn:"1D"
      }

      let token = jwt.sign(infoObj,secretKey,expiryInfo)

      await sendEmail({
        from: 'Unique <uniquekc425@gmail.com>',
          to: [req.body.email],
          subject: "Reset Password",
          html: `<h1>Click to reset your passowrd!</h1>
          <a href="http://localhost:3000/reset-password?token=${token}">
          http://localhost:3000/reset-password?token=${token}
          </a>`,
    
        });

        res.status(200).json({
          success:true,
          message:"Link has been sent"
        })
      
    }
    else{
      let error = new Error("Email not found")
      throw error
    }
  })

  export const resetPassword = expressAsyncHandler(async(req,res,next) => {
    let _id = req.id
    // console.log(_id)
    let password = req.body.password
    console.log(password)

    let hashedPassword = await bcrypt.hash(password,10)
    console.log(hashedPassword)

    let result = await WebUser.findByIdAndUpdate(_id,{password: hashedPassword},{new:true})

    res.json({
      success:true,
      message:"Password resrt",
      data: result
    })


  })