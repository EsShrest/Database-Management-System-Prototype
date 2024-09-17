import { User } from "../Models/models.js";



export const createUserService = async (data) => {
  return await User.create(data);
};

export const readAllUserService = async () => {
  return await User.find({});
};

export const readSpecificUserService = async (id) => {
  return await User.findById(id);
};

export const updateUserService = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, {
    new: true,
  });
};

export const deleteUserService = async (id) => {
  return await User.findByIdAndDelete(id);
};

export const loginUserService = async(email) => {
  return await User.findOne({email})
}