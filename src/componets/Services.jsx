import { useEffect, useState } from "react";
import Events from "./Events";


const Services = () => {

const[events,setEvents]=useState([])


 useEffect(()=>{

 fetch('events.json')
 .then(res=>res.json())
 .then(data=>setEvents(data))
},[])










    return (
        <div className="lg:my-8">
            <p className="text-center font-bold text-2xl">Here The List Of Our Social Events Services</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 lg:px-8 ">
            {
                events.map(event=><Events event={event} key={event.id}></Events>)
            }
      </div>
      </div>
    );
};

export default Services;