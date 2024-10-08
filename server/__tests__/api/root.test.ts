import { expect, describe, it } from 'vitest'
import request from 'supertest'
import app from '../../src/app'

const mockApp = request(app)

describe('Check root', () => {
  it("GET '/' should be ok", async () => {
    const response = await mockApp.get('/').expect(200)

    expect(response.body).toBeTypeOf('object')

    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toEqual('ok')

    expect(response.body).toHaveProperty('data')
    expect(response.body.data).toHaveProperty('uptime')
    expect(response.body.data.uptime).toBeTypeOf('number')
    expect(response.body.data.uptime).toBeGreaterThan(0)
  })

  it('Unkown endpoint', async () => {
    const response = await mockApp.get('/abc').expect(404)
    expect(response.text).toBe('Unknown request URL (GET: /abc)')
  })
})
