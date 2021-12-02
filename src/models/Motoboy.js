import mongoose from 'mongoose'
import { encrypt, compare } from '../cryptography.js'

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

MotoboySchema.pre('save', async (next) => {
  const motoboy = this

  if (!motoboy.isModified('senha')) return next()

  try {
    motoboy.senha = await encrypt(motoboy.senha)
    return next()
  } catch (error) {
    return next(error)
  }
})

MotoboySchema.methods.compararSenha = async (senha) =>
  await compare(senha, this.senha)

export default mongoose.model('Motoboy', MotoboySchema)
