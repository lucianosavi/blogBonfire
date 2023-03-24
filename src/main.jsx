import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ComentariosPost from './pages/ComentariosPost'


const router = createBrowserRouter([
  {
   path:"/",
   element:<App/>,
   
  },
  {
   path:"/Home",
   element:<Home/>,
  },
  {
  path:"/Comentarios",
  element:<ComentariosPost/>,
},
  



])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
