import { Router } from "express";
import { createReviewController, deleteReviewController, readAllReviewController, readSpecificReviewController, updateReviewController } from "../Contollers/reviewController.js";


let reviewRouter = Router()

reviewRouter
    .route("/")
    .post(createReviewController).get(readAllReviewController)

reviewRouter
    .route("/:id")
    .patch(updateReviewController).get(readSpecificReviewController).delete(deleteReviewController)

export default reviewRouter