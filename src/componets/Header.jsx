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
    

  <div className="" 
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"

    > 

  <img className="w-[100px]" src="./public/image/plan.png"></img>
            <p className="font-bold text-xl   ">Planing<span className="text-2xl text-pink-600"> Paradise</span></p>
            
            </div>
   
   
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