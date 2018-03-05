import { Router } from 'express'

import * as users from './users'
import * as posts from './posts'

const router = Router()

/**
 * Users
 */
router.get('/posts', users.get)
router.put('/users/:id', users.update)
router.delete('/users/:id', users.remove)

/**
 * Posts
 */
router.get('/posts', posts.get)
router.delete('/posts/:id', posts.remove)

export default router
