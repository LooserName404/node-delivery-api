import mongoose from 'mongoose'
import { encrypt, compare } from '../cryptography.js'

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

AssociadoSchema.pre('save', async (next) => {
  const associado = this

  if (!associado.isModified('senha')) return next()

  try {
    associado.senha = await encrypt(associado.senha)
    return next()
  } catch (error) {
    return next(error)
  }
})

AssociadoSchema.methods.compararSenha = async (senha) =>
  await compare(senha, this.senha)

export default mongoose.model('Associado', AssociadoSchema)
