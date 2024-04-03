import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
    "name": String,
    "description": String,
    "module": mongoose.Types.ObjectId,
    "indent": Number
});

const moduleSchema = new mongoose.Schema({
    "name": String,
    "description": String,
    "course": { type: mongoose.Types.ObjectId, ref: "CourseModel" },
    "lessons": [LessonSchema]
},
    { collection: "modules" });

export default moduleSchema; 
