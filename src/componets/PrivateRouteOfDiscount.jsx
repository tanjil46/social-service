import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate } from "react-router-dom";


const PrivateRouteOfDiscount = ({children}) => {

 const {user,loading}=useContext(AuthContext)


  if(loading){
    return <span className="loading loading-spinner loading-lg h-screen flex items-center justify-center"></span>;
  }












   if(user){
    return children
   }



    return <Navigate to='/login'></Navigate>
};

export default PrivateRouteOfDiscount;