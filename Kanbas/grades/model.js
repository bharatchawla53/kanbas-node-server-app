import mongoose from "mongoose";
import gradeSchema from "./schema.js";

const model = mongoose.model("GradeModel", gradeSchema);

export default model;