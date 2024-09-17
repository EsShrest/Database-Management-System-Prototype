import expressAsyncHandler from "express-async-handler";
import { createProductService, deleteProductService, readAllProductService, readSpecificProductService, updateProductService } from "../Services/productServices.js";



export const createProductController = expressAsyncHandler(async(req,res,next) => {
    let result = await createProductService(req.body);
    res.status(201).json({
      success:true,
      message: "Product created succesfully",
      result:result
    })
  })

  export const readAllProductController = expressAsyncHandler(async(req,res,next) => {
   
      let result = await readAllProductService()
   
    res.status(200).json({
      success:true,
      message:"Products read successfully.",
      result:result
    })
      
    })
    
    

  export const readSpecificProductController = expressAsyncHandler(async(req,res,next) => {
    
      let result = await readSpecificProductService(req.params.id)
   
    res.status(200).json({
      success:true,
      message:"Product read successfully.",
      result:result
    })
    
  })

  export const updateProductController = expressAsyncHandler(async(req,res,next) => {
      let result = await updateProductService(req.params.id,req.body)
   
    res.status(201).json({
      success:true,
      message:"Products read successfully.",
      result:result
    }) 
  })

  export const deleteProductController = expressAsyncHandler(async(req,res,next) => {
      let result = await deleteProductService(req.params.id)
   
    res.status(200).json({
      success:true,
      message:"Product deleted successfully.",
      result:result
    })
  })
