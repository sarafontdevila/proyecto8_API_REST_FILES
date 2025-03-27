const { generateSign } = require('../../config/jwt')
const User = require('../models/users')
const bcrypt = require("bcrypt")
const cursos = require('../models/cursos')

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().populate("cursos", "nombre")
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(error)
  }
}
const putUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userMakingRequest = req.user; 
    const userToUpdate = await User.findById(id);
    
    if (!userToUpdate) {
      return res.status(404).json('Usuario no encontrado');
    }
    if (req.body.rol && req.body.rol !== userToUpdate.rol && userMakingRequest.rol !== 'admin') {
      return res.status(403).json('Solo los administradores pueden cambiar roles de usuario');
    }
    const userUpdated = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    return res.status(200).json(userUpdated);

  } catch (error) {
    return res.status(400).json("Error al actualizar usuario");
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userToDelete = await User.findById(id);
    const userMakingRequest = req.user; 

    if (!userToDelete) {
      return res.status(404).json('Usuario no encontrado');
    }

    if (userMakingRequest.rol === 'admin' || userMakingRequest._id.toString() === id) {
      const deletedUser = await User.findByIdAndDelete(id);
      return res.status(200).json({
        message: 'Usuario eliminado correctamente',
        user: deletedUser
      });
    } else {
      return res.status(403).json('No tienes permisos para eliminar este usuario');
    }
  } catch (error) {
    return res.status(400).json('Error al eliminar usuario');
  }
};

const register = async (req, res, next) => {
  try {
    const rol = req.body.rol || 'user'
    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      rol: rol
    })
    const duplicateUser = await User.findOne({ username: req.body.username })
    if (duplicateUser) {
      return res.status(400).json('No válido, busca otro nombre 🤓')
    }

    const userSaved = await newUser.save()
    return res.status(201).json(userSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) {
      return res.status(400).json('Usuario no válido')
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id)
      return res.status(200).json({ user,token })

    } else{
      return res.status(400).json('Contraseña no valida')
  }
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = { getUsers, putUser, deleteUser, register, login }
