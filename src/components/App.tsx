import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import { Auth } from './pages/Auth/Auth'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const keepLoggedIn = localStorage.getItem('keepLoggedIn')

    if (keepLoggedIn !== 'true') {
      localStorage.removeItem('signed')
    }
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      loader: async () => {
        const loggedIn = localStorage.getItem('signed') === 'true'

        if (loggedIn) {
          return redirect('/dashboard')
        }

        return null
      },
      element: <Auth />
    },
    {
      path: 'dashboard',
      loader: async () => {
        const loggedOut = localStorage.getItem('signed') !== 'true'

        if (loggedOut) {
          return redirect('/')
        }

        return null
      },
      element: <Dashboard />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
