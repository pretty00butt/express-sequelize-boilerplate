import models from '../../models'

import config from '../../../config'

export const get = async (req, res, next) => {
  const { offset, limit } = req

  try {
    const { rows, count } = await models.Post.findAndCountAll({
      offset,
      limit
    })

    res.set('x-total-count', count)
    res.json(rows)
  } catch (err) {
    next(err)
  }
}

export const post = async (req, res, next) => {
  const postBody = req.body

  try {
    const newPost = await models.Post.create(postBody)
    res.json({ newPostId: newPost.id })
  } catch (err) {
    next(err)
  }
}

export const put = async (req, res, next) => {
  const id = req.params.id
  const postBody = req.body

  try {
    await models.Post.update(postBody, {
      where: { id }
    })

    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
}

export const remove = async (req, res, next) => {
  const id = req.params.id

  try {
    await models.Post.destroy({
      where: { id }
    })

    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
}
