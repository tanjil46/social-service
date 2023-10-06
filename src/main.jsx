import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorrouter from './componets/Errorrouter';
import Root from './componets/Root';
import Home from './componets/Home';


 const router=createBrowserRouter([

     {
      path:'/',
      errorElement:<Errorrouter></Errorrouter>,
      element:<Root></Root>,
      children:[

       {
        path:'/',
        element:<Home></Home>
       }








      ]
     }







 ])






















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
