import { Review } from "../Models/models.js";



export const createReviewService = async (data) => {
  return await Review.create(data);
};

export const readAllReviewService = async () => {
  // return await Review.find({}).populate("product","name description -_id").populate("user","-password");
  let result = await Review.aggregate([
    {
      $lookup:{
        from: "products",
        localField:"product",
        foreignField:"_id",
        as: "productDetails"
      }
    },
    {
      $unwind: {
        path: "$product"
      }
    },{
      $project:{
        "productDetails.description":false,
      }
    }
  ])
  console.log(result);
  return result
};

export const readSpecificReviewService = async (id) => {
  return await Review.findById(id).populate("product","name description -_id").populate("user","-password");
};

export const updateReviewService = async (id, data) => {
  return await Review.findByIdAndUpdate(id, data, {
    new: true,
  });
};

export const deleteReviewService = async (id) => {
  return await Review.findByIdAndDelete(id);
};