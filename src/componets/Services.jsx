import { useEffect, useState } from "react";


const Services = () => {

const[events,setEvents]=useState([])


 useEffect(()=>{

 fetch('events.json')
 .then(res=>res.json())
 .then(data=>setEvents(data))
},[])










    return (
        <div>
            {
                events.map(event=>)
            }
      </div>
    );
};

export default Services;