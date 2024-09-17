import express, { json } from "express"
import connectToMongoDB from "./src/connectDB/connectToMongoDB.js"
import errorMiddleware from "./src/Middleware/errorMiddleware.js"
import productRouter from "./src/Routers/productRouter.js"
import userRouter from "./src/Routers/userRouter.js"
import reviewRouter from "./src/Routers/reviewRouter.js"
import webUserRouter from "./src/Routers/webUserRouter.js"
import cors from "cors"

import fileRouter from "./src/Routers/fileRouter.js"
import { config } from "dotenv"


config()


let expressApp = express()
expressApp.use(cors())
expressApp.use(json())
expressApp.use(express.static("./public"))
connectToMongoDB()

expressApp.listen(1000, ()=> {
    console.log("Application is listening to port 1000");
})

expressApp.use("/product",productRouter)
expressApp.use("/user",userRouter)
expressApp.use("/review",reviewRouter)
expressApp.use("/file",fileRouter)
expressApp.use("/web-user",webUserRouter)

expressApp.use(errorMiddleware)


