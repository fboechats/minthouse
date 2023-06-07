export type RejectReturn = {
  statusCode: number
  message: string
}

type SuccessReturn = {
  statusCode: number
  user: {
    id: string
    email: string
    createdAt: number
  }
}

export async function login(
  email: string,
  password: string,
  keepSigned: boolean
): Promise<RejectReturn | SuccessReturn> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email || !password) {
        return reject({
          message: 'Email and password are required.',
          statusCode: 401
        })
      }

      if (!email.includes('@')) {
        return reject({
          statusCode: 400,
          message: 'You must specify a valid email address.'
        })
      }

      if (email !== 'admin@gmail.com' || password !== 'admin') {
        return reject({
          message: 'Invalid email or password.',
          statusCode: 401
        })
      }

      localStorage.setItem('signed', 'true')

      if (keepSigned) {
        localStorage.setItem('keepSignedIn', 'true')
      }

      return resolve({
        statusCode: 200,
        user: {
          id: 'u:2022',
          email,
          createdAt: 1686083435782
        }
      })
    }, 200)
  })
}

export function logout(): void {
  localStorage.removeItem('signed')
}
