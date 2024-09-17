import expressAsyncHandler from "express-async-handler";
import { createReviewService, deleteReviewService, readAllReviewService, readSpecificReviewService, updateReviewService } from "../Services/reviewServices.js";




export const createReviewController = expressAsyncHandler(async(req,res,next) => {
    let result = await createReviewService(req.body);
    res.json({
      success:true,
      message: "Review created succesfully",
      result:result
    })
  })

  export const readAllReviewController = expressAsyncHandler(async(req,res,next) => {
   
      let result = await readAllReviewService()
   
    res.json({
      success:true,
      message:"Reviews read successfully.",
      result:result
    })
      
    })
    
    

  export const readSpecificReviewController = expressAsyncHandler(async(req,res,next) => {
    
      let result = await readSpecificReviewService(req.params.id)
   
    res.json({
      success:true,
      message:"Review read successfully.",
      result:result
    })
    
  })

  export const updateReviewController = expressAsyncHandler(async(req,res,next) => {
      let result = await updateReviewService(req.params.id,req.body)
   
    res.json({
      success:true,
      message:"Reviews read successfully.",
      result:result
    }) 
  })

  export const deleteReviewController = expressAsyncHandler(async(req,res,next) => {
      let result = await deleteReviewService(req.params.id)
   
    res.json({
      success:true,
      message:"Review deleted successfully.",
      result:result
    })
  })
