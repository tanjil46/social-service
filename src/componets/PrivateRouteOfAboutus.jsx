import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import PropTypes from 'prop-types';

const PrivateRouteOfAboutus = ({children}) => {

 const location=useLocation()

    const {user,loading}=useContext(AuthContext)


    if(loading){
      return <span className="loading loading-spinner loading-lg h-screen flex items-center text-center"></span>;
    }
  
if(user){
      return children
     }
  
  
  
      return <Navigate state={location.pathname} to='/login'></Navigate>








    
};




PrivateRouteOfAboutus.propTypes={
  children:PropTypes.node,
  
  
  }







export default PrivateRouteOfAboutus;