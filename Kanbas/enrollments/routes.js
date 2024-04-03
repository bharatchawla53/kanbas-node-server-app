import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
    const findAllEnrollmentsByCourseId = async (req, res) => {
        const { cid } = req.params;
        const enrollments = await dao.findAllEnrollmentsByCourseId(cid);
        res.json(enrollments);
    }

    app.get("/api/courses/:cid/enrollments", findAllEnrollmentsByCourseId);
}
