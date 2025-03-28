const { isAdmin } = require("../../middlewares/auth")
const upload = require("../../middlewares/file")
const {getPlataformas, getPlataformasById, postPlataforma, putPlataforma, deletePlataforma} = require("../controllers/plataformas")

const plataformasRouter = require("express").Router()

plataformasRouter.get("/", getPlataformas)
plataformasRouter.get("/:id", getPlataformasById)
plataformasRouter.put("/:id", [isAdmin],upload.single("imagen"),putPlataforma)
plataformasRouter.delete("/:id",[isAdmin],deletePlataforma)
plataformasRouter.post("/", upload.single("imagen"),postPlataforma)


module.exports = plataformasRouter