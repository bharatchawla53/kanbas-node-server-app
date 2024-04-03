import mongoose from "mongoose";
import model from "./model.js";

export const findAllEnrollmentsByCourseId = (courseId) =>
    model.find({ course: courseId });