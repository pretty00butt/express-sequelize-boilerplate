import models from '../../models'
import { asyncMiddleware } from '../../lib/middlewares'

import { pagination } from '../../../config'

export const get = asyncMiddleware(async (req, res, next) => {
  const query = req.query

  const page = Number(query.page || pagination.defaultPage)
  const pageSize = Number(query.pageSize || pagination.defaultPageSize)

  try {
    const users = await models.User
      .findAll({
        attributes: {
          exclude: ['password']
        },
        offset: (page - 1) * pageSize,
        limit: pageSize
      })

    res.set('x-page', page)
    res.set('x-page-size', pageSize)
    res.json(users)
  } catch (err) {
    next(err)
  }
})

export const update = asyncMiddleware(async (req, res, next) => {
  const userId = req.params.id
  const body = req.body

  try {
    await models.User
      .update(body, {
        where: {
          id: userId
        }
      })

    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

export const remove = asyncMiddleware(async (req, res, next) => {
  const userId = req.params.id

  try {
    await models.User
      .update({
        deleted: true
      }, {
        where: {
          id: userId
        }
      })

    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})
