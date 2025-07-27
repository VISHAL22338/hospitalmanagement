
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import ErrorPage from './components/ErrorPage'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: '*', 
      element: <ErrorPage />,
    },
    
  ])

  return <RouterProvider router={router} />
}

export default App
