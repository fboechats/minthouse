import { expect, vitest } from 'vitest'
import { login, logout } from './index'

describe('login', () => {
  afterEach(() => {
    vitest.restoreAllMocks()
  })

  it('should reject if email or password is not provided', async () => {
    await expect(login('', '', true)).rejects.toEqual({
      message: 'Email and password are required.',
      statusCode: 401
    })
  })

  it('should reject if email is invalid', async () => {
    await expect(login('invalidemail', 'password', true)).rejects.toEqual({
      message: 'You must specify a valid email address.',
      statusCode: 400
    })
  })

  it('should reject if email or password is incorrect', async () => {
    await expect(
      login('admin@gmail.com', 'wrongpassword', true)
    ).rejects.toEqual({
      message: 'Invalid email or password.',
      statusCode: 401
    })
  })

  it('should resolve with user object if email and password are correct', async () => {
    const expectedUser = {
      id: 'u:2022',
      email: 'admin@gmail.com',
      createdAt: 1686083435782
    }

    await expect(login('admin@gmail.com', 'admin', true)).resolves.toEqual({
      statusCode: 200,
      user: expectedUser
    })
  })
})

describe('logout', () => {
  it('should remove the "signed" and "keepSignedIn items from localStorage', () => {
    localStorage.setItem('signed', 'true')
    localStorage.setItem('keepSignedIn', 'true')
    logout()
    expect(localStorage.getItem('signed')).toBeNull()
    expect(localStorage.getItem('keepSignedIn')).toBeNull()
  })
})
