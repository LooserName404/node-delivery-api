import bcrypt from 'bcrypt'

const SALT_ROUNDS = 12

async function encrypt(target) {
  const targetHash = await bcrypt.hash(target, SALT_ROUNDS)
  return targetHash
}

async function compare(provided, target) {
  const result = await bcrypt.compare(provided, target)
  return result
}

export { encrypt, compare }
