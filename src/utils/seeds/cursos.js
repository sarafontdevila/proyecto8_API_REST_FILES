const mongoose = require ("mongoose")
const Curso = require ( "../../api/models/cursos")
const cursos = require ("../../data/cursos")

const seedCurso = async () => {
  try {
    await mongoose.connect("mongodb+srv://sfontdevila:NcYlcXnBZPJfVJYS@cluster0.k6qh3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    await Curso.collection.drop()
    console.log ("se ha borrado la coleccion cursos")

    await Curso.insertMany (cursos)
    console.log("se han insertado los cursos")

    await mongoose.disconnect()
    console.log("se ha desconectado bbdd")
    
  } catch (error) {
    console.log ("error en la seeed")
    
  }
}

seedCurso()