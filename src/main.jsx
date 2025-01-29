
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Resume from './pages/Resume.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }, {
    path: '/resume',
    element: <Resume />
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}><App /></RouterProvider>
)
