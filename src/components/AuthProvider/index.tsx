import { ReactElement, useEffect } from 'react'

type AuthProviderProps = {
  children: ReactElement
}

export function AuthProvider({ children }: AuthProviderProps): ReactElement {
  useEffect(() => {
    const keepSignedIn = localStorage.getItem('keepSignedIn')

    if (keepSignedIn !== 'true') {
      localStorage.removeItem('signed')
    }
  }, [])

  return children
}
