import mongoose from "mongoose";
import model from "./model.js";

export const createModule = (courseId, module) => {
    delete module._id;
    module.course = mongoose.Types.ObjectId.createFromHexString(courseId);
    return model.create(module);
}

export const findAllModulesByCourseId = (courseId) =>
    model.find({ course: courseId });

export const updateModule = (mId, module) =>
    model.updateOne({ _id: mongoose.Types.ObjectId.createFromHexString(mId) }, { $set: module });

export const deleteModule = (mId) =>
    model.deleteOne({ _id: mId });
