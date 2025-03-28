const { isAdmin, isAuth} = require("../../middlewares/auth")
const upload = require("../../middlewares/file")
const {getCursos, postCurso, putCurso, deleteCurso} = require("../controllers/cursos")

const cursosRouter = require("express").Router()

cursosRouter.get("/", getCursos)
cursosRouter.post("/",[isAdmin],upload.single("imagen"),postCurso)
cursosRouter.put("/:id", [isAdmin],upload.single("imagen"),putCurso)
cursosRouter.delete("/:id",[isAdmin],deleteCurso)

module.exports = cursosRouter