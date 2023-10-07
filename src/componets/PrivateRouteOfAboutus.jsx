import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Authprovider";


const PrivateRouteOfAboutus = ({children}) => {



    const {user,loading}=useContext(AuthContext)


    if(loading){
      return <span className="loading loading-spinner loading-lg h-screen flex items-center justify-center"></span>;
    }
  
if(user){
      return children
     }
  
  
  
      return <Navigate to='/login'></Navigate>








    
};

export default PrivateRouteOfAboutus;