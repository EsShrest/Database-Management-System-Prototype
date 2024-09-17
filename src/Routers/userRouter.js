import { Router } from "express";
import { createUserController, deleteUserController, loginUserController, myProfileController, readAllUserController, readSpecificUserController, updateUserController } from "../Contollers/userController.js";
import validation from "../Middleware/validationMiddleware.js";
import userValidation from "../Validations/userValidation.js";
import isAuthenticated from "../Middleware/isAuthenticated.js";

let userRouter = Router()


userRouter
    .route("/")
    // .post(validation(userValidation),createUserController).get(readAllUserController)
    .post(createUserController).get(readAllUserController)

userRouter
    .route("/login")
    .get(loginUserController)

userRouter
    .route("/my-profile").get(isAuthenticated ,myProfileController)
userRouter
    .route("/:id")
    // .patch(isAuthenticated,updateUserController).get(isAuthenticated,readSpecificUserController).delete(isAuthenticated,deleteUserController)
    .patch(updateUserController).get(isAuthenticated,readSpecificUserController).delete(isAuthenticated,deleteUserController)

export default userRouter