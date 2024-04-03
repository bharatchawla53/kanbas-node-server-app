import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
    "user": { type: mongoose.Types.ObjectId, ref: "UserModel" },
    "course": { type: mongoose.Types.ObjectId, ref: "CourseModel" }
},
    { collection: "enrollments" });

export default enrollmentSchema; 
