const validation = (ValidationSchema) => {
    return (req,res,next) => {
        let data = ValidationSchema.validate(req.body)
        let error = data.error
        if (error){
            res.json({
                success:"False",
                message:error.details[0].message
            })
            console.log(error);
        }
        else{
            next()
        }
    }
}

export default validation