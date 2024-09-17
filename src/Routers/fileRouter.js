import { Router } from "express";
import { HandleMultipleFile, HandleSingleFile } from "../Contollers/fileController.js";
import upload from "../utils/uploadFile.js";
// import { createReviewController, deleteReviewController, readAllReviewController, readSpecificReviewController, updateReviewController } from "../Contollers/fileController.js";


let fileRouter = Router()

fileRouter
    .route("/single")
    .post(upload.single("myFile"),HandleSingleFile)

fileRouter
    .route("/multiple")
    .post(upload.array("myFile"),HandleMultipleFile)

export default fileRouter