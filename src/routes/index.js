import { Router } from 'express'
import config from '../../config'

import adminRouter from './admin'
import * as auth from './auth'
import * as sampleAsyncAwait from './sample-async-await'

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
 * Test for async/await
 */
router.get('/async-await-test', sampleAsyncAwait.asyncTest)

/**
 * Admin
 */
router.use('/admin', adminRouter)

/**
 * Authentication
 */
router.post('/signup', auth.signup)
router.post('/login', auth.login)

export default router
