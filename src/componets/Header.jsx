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
    setSucess('Succesfully logOut')





     })
     
     .catch(error=>{
      setErrors(error.message)
     })


     setErrors('')
     setSucess('')
     
     


 }








    return (
        <div>
            

            <div className="navbar bg-text-base-100 flex lg:justify-between lg:flex-row lg:items-center 
            flex-col justify-center">
  <div className=" ">
    

  <div className="" 
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"

    > 

  <img className="w-[100px]" src="./public/image/plan.png"></img>
            <p className="font-bold text-xl   ">Planing<span className="text-2xl text-pink-600"> Paradise</span></p>
            
            </div>
   
   
  </div>
  <div className="">

 
  
  {

     user ? <p className="font-bold bg-orange-500 py-2 px-3 rounded-lg">{user.email}</p>:
     <div className="">
     <p className="font-bold bg-white py-2 px-3 rounded-lg">{sucess}</p>
     <p className="font-bold bg-white py-2 px-3 rounded-lg">{errors}</p>
     </div>
    }


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