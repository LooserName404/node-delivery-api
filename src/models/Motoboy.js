import mongoose from 'mongoose'

const MotoboySchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    unique: true,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
})

export default mongoose.model('Motoboy', MotoboySchema)
