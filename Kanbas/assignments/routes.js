import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {

    const findAllAssignmentsByCourseId = async (req, res) => {
        const { cid } = req.params;
        const assignments = await dao.findAllAssignmentsByCourseId(cid);
        res.json(assignments);
    }

    const createAssignment = async (req, res) => {
        const { cid } = req.params;
        const assignment = await dao.createAssignment(cid, req.body);
        res.json(assignment);
    }

    const deleteAssignment = async (req, res) => {
        const { aid } = req.params;
        const status = await dao.deleteAssignment(aid);
        res.json(status);
    }

    const updateAssignment = async (req, res) => {
        const { aid } = req.params;
        const status = await dao.updateAssignment(aid, req.body);
        res.json(status);
    }

    app.get("/api/courses/:cid/assignments", findAllAssignmentsByCourseId);
    app.post("/api/courses/:cid/assignments", createAssignment);
    app.delete("/api/assignments/:aid", deleteAssignment);
    app.put("/api/assignments/:aid", updateAssignment);
}
