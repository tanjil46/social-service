import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import PropTypes from 'prop-types';


export const AuthContext=createContext(null)
const Authprovider = ({children}) => {
const[user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
const googleProvider=new GoogleAuthProvider()



const createUser=(email,password)=>{
    setLoading(true)
 return createUserWithEmailAndPassword(auth,email,password)
};


const userSingIn=(email,password)=>{
    setLoading(true)
       return  signInWithEmailAndPassword(auth,email,password)
};

const googleLogIn=()=>{
    setLoading(true)
   return signInWithPopup(auth,googleProvider)
};


const userLogOut=()=>{
    setLoading(true)
 return signOut(auth)
}


useEffect(()=>{
   const unSubscribe=onAuthStateChanged(auth,currentUser=>{
  
     setUser(currentUser)
     setLoading(false)
      })

     return ()=>{
        unSubscribe()
     }

},[]);



const authValues={user,createUser,userSingIn,userLogOut,googleLogIn,loading}



    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};




Authprovider.propTypes={
    children:PropTypes.node,
    
    
    }









export default Authprovider;