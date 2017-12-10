import { Router } from 'express'

import * as users from './users'

const router = Router()

/**
 * Users
 */
router.get('/users', users.get)
router.put('/users', users.update)
router.delete('/users/:id', users.remove)

export default router
