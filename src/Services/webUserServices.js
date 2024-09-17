import { WebUser } from "../Models/models.js";



export const createWebUserService = async (data) => {
  return await WebUser.create(data);
};

export const readAllWebUserService = async () => {
  return await WebUser.find({});
};

export const readSpecificWebUserService = async (id) => {
  return await WebUser.findById(id);
};

export const updateWebUserService = async (id, data) => {
  return await WebUser.findByIdAndUpdate(id, data, {
    new: true,
  });
};

export const deleteWebUserService = async (id) => {
  return await WebUser.findByIdAndDelete(id);
};

export const loginWebUserService = async(email) => {
  return await WebUser.findOne({email})
}