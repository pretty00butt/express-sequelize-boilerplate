import { validateToken } from './jwt'
import config from '../../config'

export const authenticate = (req, res, next) => {
  const token = req.get(config.header.token)

  if (token) {
    validateToken({ token })
      .then(payload => {
        req.payload = payload
        next()
      })
      .catch(err => next(err))
  } else {
    next(new Error('No Token'))
  }
}

export const asyncMiddleware = fn => (req, res, next) => {
  Promise
    .resolve(fn(req, res, next))
    .catch(next);
}
