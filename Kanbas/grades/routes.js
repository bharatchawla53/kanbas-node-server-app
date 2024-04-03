import * as dao from "./dao.js";

export default function GradeRoutes(app) {
    const findGradeByStudentIdAndAssignmentId = async (req, res) => {
        const { cid } = req.params;
        const grades = await dao.findGradeByStudentIdAndAssignmentId(cid);
        res.json(grades);
    }

    const findAllGrades = async (req, res) => {
        const grades = await dao.findGrades();
        res.json(grades);
    }

    app.get("/api/courses/:cid/grades", findAllGrades);
}
