import passport from 'passport'
import bcrypt from 'bcrypt-nodejs'
import createError from 'http-errors'

import models from '../../models'
import * as errorMessages from '../../lib/error-messages'
import { createToken } from '../../lib/jwt'
import { encryptHash, compareHash } from '../../lib/crypto'

export const signup = async (req, res, next) => {
  try {
    const hash = await encryptHash(req.body.password)
    const user = await models.User.create({
      ...req.body,
      password: hash
    })
    const token = createToken(req.body)
    res.json({ user: { ...user.get(), password: '' }, token })
  } catch (err) {
    next(err)
  }
}

export const login = async (req, res, next) => {
  const { username, password } = req.body

  try {
    const user = await models.User.findOne({
      where: {
        username
      }
    })

    if (user) {
      const valid = await compareHash(password, user.password)
      if (valid) {
        const token = createToken({ ...user.get(), password: '' })
        res.json({
          user: {
            ...user.get(),
            password: ''
          },
          token
        })
      } else {
        throw new createError.Unauthorized(errorMessages.auth.wrongPassword)
      }
    } else {
      throw new createError.NotFound(errorMessages.auth.userNotFound)
    }
  } catch (err) {
    next(err)
  }
}
