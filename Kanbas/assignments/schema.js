import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    "title": String,
    "course": { type: mongoose.Types.ObjectId, ref: "AssignmentModel" },
    "dueDate": Date,
    "dueTime": String,
    "points": Number,
    "description": String,
    "availableFrom": Date,
    "availableUntil": Date
},
    { collection: "assignments" });

export default assignmentSchema;
