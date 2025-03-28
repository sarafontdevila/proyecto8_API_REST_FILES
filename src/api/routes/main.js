const cursosRouter = require("./cursos")
const plataformasRouter = require("./plataformas")
const usersRoutes = require("./users")
const mainRouter = require("express").Router()

mainRouter.use("/plataformas/", plataformasRouter)
mainRouter.use("/cursos/", cursosRouter)
mainRouter.use("/users/", usersRoutes)

module.exports =mainRouter