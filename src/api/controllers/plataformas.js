const { deleteFile } = require("../../utils/deleteFile")
const Plataforma = require("../models/plataformas")

const getPlataformas = async (req, res, next) => {
  try {
    const plataformas = await Plataforma.find().populate({ 
      path: "cursos",
      select: "nombre",
    });
    console.log ("plataformas encontrados:", plataformas)
    return res.status(200).json(plataformas)
  } catch (error) {
    return res.status(400).json("Error en get") 
  }
}

const getPlataformasById = async (req, res, next) => {
  try {
    const {id }= req.params
    const plataforma = await Plataforma.findById(id).populate("cursos")
    return res.status(200).json(plataforma)
    
  } catch (error) {
    return res.status(400).json("Error en getByID")
    
  }
}
const postPlataforma = async (req, res, next) => {
  try {
    console.log(req.body)
    const newPlataforma = new Plataforma(req.body)
    if (req.file) {
      newPlataforma.imagen = req.file.path;
    }
    const plataformaSaved = await newPlataforma.save()
    return res.status(201).json(plataformaSaved)
    
  } catch (error) {
    return res.status(400).json("Error en post")
    
  }
}
/*const putPlataforma = async (req, res, next) => {
  try {
    const { id }= req.params
    const oldPlataforma = await Plataforma.findById(id)
    const newPlataforma = new Plataforma(req.body)
    newPlataforma._id = id
    const cursos = req.body.cursos || [];
    newPlataforma.cursos = [...oldPlataforma.cursos,...req.body.cursos]
    if (req.file) {
      newPlataforma.imagen = req.file.path;
      deleteFile(oldPlataforma.imagen);}

    const plataformaUpdated = await Plataforma.findByIdAndUpdate(id, newPlataforma, {new: true})
    
    return res.status(200).json(plataformaUpdated)

  } catch (error) {
    return res.status(400).json("Error en put")
  }
}*/
const putPlataforma = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldPlataforma = await Plataforma.findById(id);
    
    if (!oldPlataforma) {
      return res.status(404).json({ message: "Plataforma no encontrada" });
    }
    const updatedFields = { ...req.body };

    updatedFields.cursos = [...new Set([...oldPlataforma.cursos, ...(req.body.cursos || [])])];

    if (req.file) {
      if (oldPlataforma.imagen) {
        deleteFile(oldPlataforma.imagen);
      }
      updatedFields.imagen = req.file.path;
    }

    const plataformaUpdated = await Plataforma.findByIdAndUpdate(id, updatedFields, { new: true });

    return res.status(200).json(plataformaUpdated);
  } catch (error) {
    return res.status(500).json({ message: "Error en PUT", error: error.message });
  }
};
const deletePlataforma = async (req, res, next) => {
  try {
    const {id }= req.params
    const plataformaDeleted = await Plataforma.findByIdAndDelete(id)
    deleteFile(plataformaDeleted.imagen)
    return res.status(200).json(plataformaDeleted)
  } catch (error) { 
    return res.status(400).json("Error en delete")
    
  }
}
module.exports = {
  getPlataformas,
  getPlataformasById,
  postPlataforma,
  putPlataforma,
  deletePlataforma
}