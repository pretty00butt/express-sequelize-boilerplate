import crypto from 'crypto'
import bcrypt from 'bcrypt-nodejs'
import config from '../../config'

// 1-1. 양방향 암호화 - 암호화
export const encrypt = value => {
  if (value) {
    const cipher = crypto.createCipher('aes256', config.privateKey)
    return cipher.update(value, 'ascii', 'hex') + cipher.final('hex')
  } else {
    return value
  }
}

// 1-2. 양방향 암호화 - 복호화
export const decrypt = value => {
  if (value) {
    const decipher = crypto.createDecipher('aes256', config.privateKey)
    return decipher.update(value, 'hex', 'ascii') + decipher.final('ascii')
  } else {
    return value
  }
}

export const encryptHash = value => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(value, null, null, (err, result) => {
      if (err) reject(err)
      else resolve(result)
    })
  })
}

export const compareHash = (value, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(value, hash, (err, result) => {
      if (err) reject(err)
      else resolve(result)
    })
  })
}
