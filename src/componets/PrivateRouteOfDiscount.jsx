import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRouteOfDiscount = ({children}) => {
  const location=useLocation()
 const {user,loading}=useContext(AuthContext)


  if(loading){
    return <span className="loading loading-spinner loading-lg h-screen flex items-center justify-center"></span>;
  }












   if(user){
    return children
   }



    return <Navigate state={location.pathname} to='/login'></Navigate>
};




PrivateRouteOfDiscount.propTypes={
  children:PropTypes.node,
  
  
  }









export default PrivateRouteOfDiscount;