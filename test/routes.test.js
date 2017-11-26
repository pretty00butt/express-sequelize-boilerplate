import request from 'supertest'
import app from '../src/app.js'

describe('GET /', () => {
  it('should render properly', async () => {
    await request(app).get('/').expect(200)
  })
})

describe('GET /api', () => {
  it('should render properly', async () => {
    await request(app).get('/api').expect(200)
  })
})

describe('GET /404', () => {
  it('should return 404 for non-existent URLs', async () => {
    await request(app).get('/404').expect(404)
    await request(app).get('/notfound').expect(404)
  })
})
