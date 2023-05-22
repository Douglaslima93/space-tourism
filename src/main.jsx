import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './assets/pages/Home.jsx'
import Destination from './assets/pages/Destination.jsx'
import Crew from './assets/pages/Crew.jsx'
import Tecnology from './assets/pages/Tecnology.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'destination',
        element: <Destination/>,
      },
    
      {
        path: 'crew',
        element: <Crew/>
      },

      {
        path: 'tecnology',
        element: <Tecnology/>,
      },
    ]
  },

 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
