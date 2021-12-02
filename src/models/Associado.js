import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  nomeEmpresa: String,
  cnpj: {
    type: String,
    unique: true,
  },
  senha: String,
  endereco: {
    type: String,
    required: false,
  },
})

export default mongoose.model('Associado', schema)
