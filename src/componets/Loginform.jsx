import { useContext, useState } from "react";

import { AuthContext } from "./Authprovider";
import Navbar from "./Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";



const Loginform = () => {
const location=useLocation()
const navigate=useNavigate()
const {userSingIn,googleLogIn}=useContext(AuthContext)
const[errors,setErrors]=useState('')
const[sucess,setSucess]=useState('')




 const loginHandler=e=>{

    e.preventDefault()

 const email=e.target.email.value
 const password=e.target.password.value
 console.log(email,password)









   userSingIn(email,password)
   .then((result)=>{
    console.log(result.user)
    setSucess('Succesfully logIn')

    navigate(location?.state? location.state :'/')
   })
   .catch(error=>{
    setErrors(error.message)
   })

};



 const googleLogInHandler=()=>{
     googleLogIn()
     .then((result)=>{
        console.log(result.user)
        setSucess('Succesfully logIn')
       })
       .catch(error=>{
        setErrors(error.message)
       })
 }


























    return (
        <div>
            
       <Navbar></Navbar>
   
        
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content ">
  

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-gradient-to-r from-violet-500 to-fuchsia-500">
    <div className="">
    <p className="text-center text-xl font-bold">Login Now</p>
       </div>
      <form onSubmit={loginHandler} className="card-body">
        <div className="form-control">

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="">New Here! <Link className="btn font-bold  bg-gradient-to-r from-yellow-500 to-orange-500 "  to='/resis'>Resister</Link> Or</p>
        <p className="text-center">Login With</p>
        <button onClick={googleLogInHandler}  className="btn bg-gradient-to-r from-blue-500 to-orange-500">Google</button>
      </form>
      {
            errors &&<p className="text-center font-bold text-lg text-red-600 my-3">{errors}</p>
          }
          {
            sucess &&<p className="text-center font-bold text-lg text-green-700 my-3">{sucess}</p>
          }





    </div>
  </div>
</div>












        </div>
    );
};

export default Loginform;