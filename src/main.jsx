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
import DetailsEvents from './componets/DetailsEvents';


 const router=createBrowserRouter([

     {
      path:'/',
      errorElement:<Errorrouter></Errorrouter>,
      element:<Root></Root>,
      children:[

       {
        path:'/',
        element:<Home></Home>,
        
       },
       {
        path:'/event/:Id',
        element:<DetailsEvents></DetailsEvents>,
        loader:()=> fetch('events.json')
       }
       








      ]
     }







 ])






















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
