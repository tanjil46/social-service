import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Authprovider";






const Header = () => {
const navigate=useNavigate()
const[errors,setErrors]=useState('')
const[sucess,setSucess]=useState('')

const{user,userLogOut}=useContext(AuthContext)






 const logOuthandler=()=>{

     userLogOut()
     .then(()=>{
     navigate('/login')
    setSucess('succesfully logOut')





     })
     
     .catch(error=>{
      setErrors(error.message)
     })
 }











    return (
        <div>
            

            <div className="navbar bg-text-base-100">
  <div className="navbar-start">
    

  
    <img className="w-[200px]" src="./public/image/logos.png"></img>
   
  </div>
  <div className="navbar-end">

 
  <img className='' src=''/>
   <p>{}</p>


     {
       user? <button onClick={()=>logOuthandler()}  className="btn  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">Sing Out</button> 
       :<Link to='/login' className="btn  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">Login</Link>


     } 
     


  </div>
</div>



















        </div>
    );
};

export default Header;