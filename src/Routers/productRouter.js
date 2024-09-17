import { Router } from "express";
import { createProductController, deleteProductController, readAllProductController, readSpecificProductController, updateProductController } from "../Contollers/productController.js";

let productRouter = Router()

productRouter
    .route("/")
    .post(createProductController).get(readAllProductController)

productRouter
    .route("/:id")
    .patch(updateProductController).get(readSpecificProductController).delete(deleteProductController)

export default productRouter