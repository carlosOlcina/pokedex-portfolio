import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
// import { Habilities } from './pages/Habilities'
import { Index } from './pages/Index'
import { SearchProvaider } from './context/search'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Index/>
  }
  // {
  //   path:"/habilities",
  //   element: <Habilities/>
  // }
])

createRoot(document.getElementById('root')).render(
  <SearchProvaider>
    <RouterProvider router={router}/>
  </SearchProvaider>
)
