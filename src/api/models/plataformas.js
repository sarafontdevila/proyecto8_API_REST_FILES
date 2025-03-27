const mongoose =require("mongoose")

const plataformasSchema = new mongoose.Schema({
  nombre:{type:String, required:true},
  imagen:{type:String, required:true},
  cursos:[{type: mongoose.Types.ObjectId,ref:"cursos", required:false}]
},
{
  timestamps:true,
  collection:"plataformas"
})

const Plataforma = mongoose.model("plataformas",plataformasSchema, "plataformas")
module.exports = Plataforma