import { login } from './index'

describe('Login', () => {
  it('Login with valid email and password', async () => {
    await expect(login('admin@gmail.com', 'admin')).resolves.toMatchObject({
      statusCode: 200,
      user: {
        id: 'u:2022',
        email: 'admin@gmail.com',
        createdAt: 1686083435782
      }
    })
  })

  it('Login with invalid email', async () => {
    await expect(login('invalidemail', 'password')).rejects.toMatchObject({
      statusCode: 400,
      message: 'You must specify a valid email address.'
    })
  })

  it('Login with empty email or password', async () => {
    await expect(login('', 'password')).rejects.toMatchObject({
      statusCode: 401,
      message: 'Email and password are required.'
    })

    await expect(login('user@example.com', '')).rejects.toMatchObject({
      statusCode: 401,
      message: 'Email and password are required.'
    })
  })

  it('Login with invalid email or password', async () => {
    await expect(
      login('user@example.com', 'wrongpassword')
    ).rejects.toMatchObject({
      statusCode: 401,
      message: 'Invalid email or password.'
    })

    await expect(
      login('wrongemail@example.com', 'password')
    ).rejects.toMatchObject({
      statusCode: 401,
      message: 'Invalid email or password.'
    })
  })
})
