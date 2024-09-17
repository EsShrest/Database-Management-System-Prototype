import { Product } from "../Models/models.js";



export const createProductService = async (data) => {
  return await Product.create(data);
};

export const readAllProductService = async () => {
  return await Product.find({});

  // Potential modification for Fine Searching

  // return await Product.aggregate([
  //   {
  //     $match: {
  //       name: "Laptop"
  //     }
  //   }
  // ])

  // let pipeline = []
  // let matchStage = {
  //   $match: {
  //     name: "Laptop"
  //   }
  // }
  // pipeline.push(matchStage)
 
  // let matchStage = {
  //   $match:{
  //     $or:[{
  //       name: { $regex: "phone"},
  //       description: { $regex: "phone", $option: "1"}
  //     }]
  //   },
  
  // }
  // pipeline.push(matchStage)

  // let sortStage = {
  //   $sort:{
  //     name: 1,
  //     price: 1
  //   }
  // }
  // pipeline.push(sortStage)
  // console.log(pipeline);

  // let limitStage = {
  //   $limit:2
  // }
  // pipeline.push(limitStage)
  // console.log(pipeline);
  // let groupStage = {
  //   $group: {
  //     _id: "$category",
  //     totalQuantity:{
  //       $sum: "$quantity"
  //     }
  //   }
  // }
  // pipeline.push(groupStage)
  // console.log(pipeline);

//   let projectStage = {
//     $project:{
//       name:1,
//       _id:0,
//       description:1
//     }
//   }
//   pipeline.push(projectStage)
//   console.log(projectStage);
//   return await Product.aggregate(pipeline)
};

export const readSpecificProductService = async (id) => {
  return await Product.findById(id);
};

export const updateProductService = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, {
    new: true,
  });
};

export const deleteProductService = async (id) => {
  return await Product.findByIdAndDelete(id);
};