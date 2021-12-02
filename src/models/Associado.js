import mongoose from 'mongoose'

const AssociadoSchema = new mongoose.Schema({
  nomeEmpresa: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    unique: true,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: false,
  },
})

export default mongoose.model('Associado', AssociadoSchema)
