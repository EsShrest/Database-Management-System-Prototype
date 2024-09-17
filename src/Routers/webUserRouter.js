import { Router } from "express";
import { createWebUserController, forgotPassword, loginUser, myProfile, resetPassword, updatePassword, updateProfile, verifyEmail } from "../Contollers/webUserController.js";
import isAuthenticated from "../Middleware/isAuthenticated.js";
import isAuthorized from "../Middleware/isAuthorized.js";


let webUserRouter = Router()

webUserRouter
    .route("/")
    .post(createWebUserController)

webUserRouter
    .route("/verify-email")
    .patch(verifyEmail)


webUserRouter
    .route("/login")
    .post(loginUser)

webUserRouter
    .route("/my-profile")
    .get(isAuthenticated,myProfile)

webUserRouter
    .route("/update-profile")
    .patch(isAuthenticated,updateProfile)

webUserRouter
    .route("/update-password")
    .patch(isAuthenticated,updatePassword)

webUserRouter
    .route("/forgot-password")
    .post(forgotPassword)
webUserRouter
    .route("/reset-password")
    // .post(isAuthenticated,isAuthorized(["admin"]),resetPassword)
    .post(isAuthenticated,resetPassword)

export default webUserRouter