import passport from 'passport'

import models from '../models/index'
import { createToken } from '../lib/jwt'

export const signup = (req, res, next) => {
  models.User.create(req.body)
    .then(user => {
      const token = createToken()
      res.json({ token })
    })
    .catch(err => next(err))
}

export const login = (req, res, next) => {
  passport.authenticate('local',
    function authenticateByLocal (err, user, ex) {
      if (err) {
        next(new Error('아이디와 비밀번호를 확인해주세요.'))
      } else {
        if (ex) {
          next(ex)
        } else {
          const token = createToken(user)
          user.token = token
          res.json(user)
        }
      }
    })(req, res)
}
