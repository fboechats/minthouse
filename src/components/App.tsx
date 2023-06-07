import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import { Auth } from './pages/Auth/Auth'
import { Dashboard } from './pages/Dashboard/Dashboard'

function App() {
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
