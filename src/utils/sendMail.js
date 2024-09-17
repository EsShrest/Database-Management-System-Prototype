// ********if send mail does not work  error *********
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"  (use this commend at index.js file)

import nodemailer from "nodemailer";
import { email, pass } from "./constant.js";



let transporterInfo = {
  // host: emailHost,
  host: "smtp.gmail.com",
  // if from is gmail use gmail smtp
  port: 587,
  secure: false,

 
  auth: {
    // note user and pass most be genuine
    //it is the email through which email is send
    user: email,
    pass: pass,
    // to send email form server first you have to =>
    //use 2-step verification and generate app password
    //instead of using your password use app password of gmail
    //for this go to the => manage your account => security setting and=>enable 2-step verifiction =>(search app password) create app pssword (select other option)
  },
};

export let sendEmail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo); //transporter gives from information
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("error has occurred", error.message);
  }
};

