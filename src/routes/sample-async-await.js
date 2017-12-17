import { asyncMiddleware } from '../lib/middlewares'

export const asyncTest = asyncMiddleware(async (req, res) => {
  try {
    const result = await test1()
    res.json({ result })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

const test1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}
