import { Router } from 'express'
import config from '../../config'
import * as auth from './auth'
import * as test from './test'

const router = Router()

/**
 * GET home page
 */

router.get('/', (req, res) => {
  res.json({
    version: config.version
  })
})

/**
 * Authentication
 */
router.post('/signup', auth.signup)
router.post('/login', auth.login)
router.get('/async-await-test', test.asyncTest)

export default router
