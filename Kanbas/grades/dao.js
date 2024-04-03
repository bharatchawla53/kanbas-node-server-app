import mongoose from "mongoose";
import model from "./model.js";

export const findGradeByStudentIdAndAssignmentId = (sid, aid) =>
    model.find({ student: sid, assignment: aid });

export const findGrades = () =>
    model.find(); 
