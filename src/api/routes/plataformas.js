const { isAdmin } = require("../../middlewares/auth")
const {getPlataformas, getPlataformasById, postPlataforma, putPlataforma, deletePlataforma} = require("../controllers/plataformas")

const plataformasRouter = require("express").Router()


plataformasRouter.get("/:id", getPlataformasById)
plataformasRouter.put("/:id", [isAdmin],putPlataforma)
plataformasRouter.delete("/:id",[isAdmin],deletePlataforma)
plataformasRouter.post("/", postPlataforma)
plataformasRouter.get("/", getPlataformas)

module.exports = plataformasRouter