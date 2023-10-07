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
import Loginform from './componets/Loginform';
import Resisterform from './componets/Resisterform';
import Authprovider from './componets/Authprovider';



import PrivateRouteOfDetails from './componets/PrivateRouteOfDetails';
import Discount from './componets/Discount';
import PrivateRouteOfDiscount from './componets/PrivateRouteOfDiscount';
import AboutUs from './componets/AboutUs';
import PrivateRouteOfAboutus from './componets/PrivateRouteOfAboutus';


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
        element:<PrivateRouteOfDetails><DetailsEvents></DetailsEvents></PrivateRouteOfDetails>,
        loader:()=> fetch('events.json')
       },
       {
        path:'/login',
        element:<Loginform></Loginform>
       },
       {
        path:'/resis',
        element:<Resisterform></Resisterform>
       },
       {
        path:'/discount',
        element:<PrivateRouteOfDiscount><Discount></Discount></PrivateRouteOfDiscount>
       },
       {
        path:'/about',
       
        element:<PrivateRouteOfAboutus><AboutUs></AboutUs></PrivateRouteOfAboutus>
       }
       








      ]
     }







 ])






















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </React.StrictMode>,
)
