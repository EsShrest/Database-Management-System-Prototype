import expressAsyncHandler from "express-async-handler";




export const HandleSingleFile = expressAsyncHandler(async(req,res,next) => {
    let url = req.file.filename

    res.json({
        success:true,
        message:"Products read successfully.",
        result:`localhost://1000${url}`
})
})


export const HandleMultipleFile = expressAsyncHandler(async(req,res,next) => {
    let urls = req.files.map((value,i)=>{
        return `localhost://1000${value.file.filename}`
    })
    res.json({
        success:true,
        message:"Products read successfully.",
        result:urls
})
})