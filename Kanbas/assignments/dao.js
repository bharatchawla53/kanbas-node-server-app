import mongoose from "mongoose";
import model from "./model.js";

export const createAssignment = (courseId, assignment) => {
    delete assignment._id;
    assignment.course = mongoose.Types.ObjectId.createFromHexString(courseId);
    return model.create(assignment);
}

export const findAllAssignmentsByCourseId = (courseId) =>
    model.find({ course: courseId });

export const updateAssignment = (aId, assignment) =>
    model.updateOne({ _id: mongoose.Types.ObjectId.createFromHexString(aId) }, { $set: assignment });

export const deleteAssignment = (aId) =>
    model.deleteOne({ _id: aId });
