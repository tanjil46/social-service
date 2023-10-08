
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AboutSecond from "./AboutSecond";
import LOGO from './image/palning11.jpg'

const AboutUs = () => {

const[abouts,setAbouts]=useState([])

    useEffect(()=>{

        fetch('about.json')
        .then(res=>res.json())
        .then(data=>setAbouts(data))
       },[])
       
       













    return (
        <div>
            <Navbar></Navbar>
            <div className="flex items-center justify-center">
            <p className="font-bold text-xl   ">Planing<span className="text-2xl text-pink-600"> Paradise</span></p>
            <img className="w-[100px] rounded-md" src={LOGO}></img>
            </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-3 px-6">
      {
          abouts.map((about,idx)=><AboutSecond key={idx} about={about}></AboutSecond>)

      }

</div>





        </div>
    );
};

export default AboutUs;