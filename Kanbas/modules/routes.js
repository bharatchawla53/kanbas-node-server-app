import * as dao from "./dao.js";

export default function ModuleRoutes(app) {

    const findAllModulesByCourseId = async (req, res) => {
        const { cid } = req.params;
        const modules = await dao.findAllModulesByCourseId(cid);
        res.json(modules);
    }

    const createModule = async (req, res) => {
        const { cid } = req.params
        const module = await dao.createModule(cid, req.body);
        res.json(module);
    }

    const deleteModule = async (req, res) => {
        const { mid } = req.params;
        const status = await dao.deleteModule(mid);
        res.json(status);
    }

    const updateModule = async (req, res) => {
        const { mid } = req.params;
        const status = await dao.updateModule(mid, req.body);
        res.json(status);
    }

    app.get("/api/courses/:cid/modules", findAllModulesByCourseId);
    app.post("/api/courses/:cid/modules", createModule);
    app.delete("/api/modules/:mid", deleteModule);
    app.put("/api/modules/:mid", updateModule);
}
