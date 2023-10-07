import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Authprovider";



const Resisterform = () => {

 const {createUser}=useContext(AuthContext)
  const[wrong,setWrong]=useState('')
  const[sucess,setSucess]=useState('')




 const resisterHandler=e=>{

    e.preventDefault()
    // const name=e.target.name.value
    // const photoURL=e.target.photo.value
 const email=e.target.email.value
 const password=e.target.password.value
 console.log(email,password)
 setWrong('')
 
   if(password.length<6){
   return setWrong('Your Password Must be  Minimum Six characters')
   }
   else if(!/[A-Z]/.test(password)){
    return setWrong('There Must Be a Capital latter')
   }
   else if(!/[@$!%*?&]/.test(password)){
    return setWrong('There Must Be a Special latter')
   }
   
   











   createUser(email,password)
   .then((result)=>{
    console.log(result.user)
      setSucess('Succesfully Resistered')
   })
   .catch(error=>{
    setWrong(error.message)
    
   })



 }









    return (
        <div>
            


            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-purple-500 to-pink-500">
      <form onSubmit={resisterHandler} className="card-body">
     
        <div className="form-control">

        <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type='text' placeholder="name" name="name"  className="input input-bordered" />

          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="photo url" name="photo"  className="input input-bordered"  />






          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="flex">
          <input
          
          type='password'     placeholder="password" name="password" className="input input-bordered" required />
         
         </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Resister</button>
        </div>
           <p className="">Already Resistered!<Link className="text-white text-xl" to='/login'>Login </Link> </p>
      </form>
          {
            wrong &&<p className="text-center font-bold text-lg text-red-600 my-3">{wrong}</p>
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

export default Resisterform;