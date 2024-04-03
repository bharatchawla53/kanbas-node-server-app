import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
    "student": { type: mongoose.Types.ObjectId, ref: "UserModel" },
    "assignment": { type: mongoose.Types.ObjectId, ref: "AssignmentModel" },
    "grade": Number
},
    { collection: "grades" });

export default gradeSchema; 
