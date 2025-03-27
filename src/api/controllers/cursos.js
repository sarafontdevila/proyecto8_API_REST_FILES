const Curso = require("../models/cursos")

const getCursos = async (req, res, next) => {
  try {
    const cursos = await Curso.find({verified:true});
    console.log("cursos encontrados:", cursos)
    return res.status(200).json(cursos)
  } catch (error) {
    return res.status(400).json("Error en get") 
  }
}

/*const postCurso = async (req, res, next) => {
  try {
    const newCurso = new Curso(req.body)

    if(req.user.rol === "admin") {newCurso.verified = true

    }else {
      newCurso.verified = false
    }
    const cursoSaved = await newCurso.save()
    return res.status(201).json(cursoSaved)
    
  } catch (error) {
    return res.status(400).json("Error en post")
    
  }
}*/
const putCurso = async (req, res, next) => {
  try {
    const { id }= req.params
    const newCurso = new Curso(req.body)
    newCurso._id = id
    const cursoUpdated = await Curso.findByIdAndUpdate(id, newCurso, {new: true})
    return res.status(200).json(cursoUpdated)

  } catch (error) {
    return res.status(400).json("Error en put")
  }
}
const postCurso = async (req, res, next) => {
  try {
    if (req.user.rol !== "admin") {
      return res.status(403).json({ message: "Acceso denegado. Solo los administradores pueden publicar cursos." });
    }
    const newCurso = new Curso({ ...req.body, verified: true });
    if (req.file) {
      console.log(req.file)
      newCurso.imagen = req.file.path;
    }
    const cursoSaved = await newCurso.save();

    return res.status(201).json(cursoSaved);
    
  } catch (error) {
    console.log(req.user)
    return res.status(400).json({ message: "Error al publicar el curso", error });
  }
};
const deleteCurso = async (req, res, next) => {
  try {
    const {id }= req.params
    const cursoDeleted = await Curso.findByIdAndDelete(id)
    return res.status(200).json(cursoDeleted)
  } catch (error) { 
    return res.status(400).json("Error en delete")
    
  }
}
module.exports = {
  getCursos,
  postCurso,
  putCurso,
  deleteCurso,
}