import createError from 'http-errors'

import { validateToken } from './jwt'
import config from '../../config'

export const authenticate = (req, res, next) => {
  const token = req.get(config.header.token)

  if (token) {
    validateToken({ token })
      .then(payload => {
        req.validUser = payload
        next()
      })
      .catch(err => next(err))
  } else {
    next(new Error('No Token'))
  }
}

export const validateAdmin = async (req, res, next) => {
  const token = req.get(config.header.token)

  try {
    const payload = await validateToken({ token })
    if (payload.isAdmin) {
      req.validUser = payload
      next()
    } else {
      throw new createError.Unauthorized('권한이 없습니다.')
    }
  } catch (err) {
    next(err)
  }
}

export const paginate = (req, res, next) => {
  req.limit =
    Number(req.get('x-page-size')) || config.pagination.defaultPageSize
  req.offset =
    ((Number(req.get('x-page')) || config.pagination.defaultPage) - 1) *
    req.limit
  next()
}
