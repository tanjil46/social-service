import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";




const DetailsEvents = () => {


 const events=useLoaderData()
 const{Id}=useParams()
 const idInt=parseInt(Id)
 const matchingId=events.find(event=>event.id===idInt)
   
 const{name,image,short_description,price}=matchingId
 return (
        <div>
           <Navbar></Navbar>
           <div className="">
           <p className="text-center font-bold text-2xl">Here Some Example of Our Work</p>
           <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="events" className="rounded-xl w-full" />
  </figure>
  <div className="card-body  ">
    <h2 className="text-lg rounded-xl py-2 px-4 font-bold bg-pink-600 text-white text-center">{name}</h2>
    <div className="flex justify-between">
    <p className="font-bold">{short_description}</p>
    <p>Price:<span className="text-lg font-bold">{price}</span></p>
    </div>

    <div className=" text-center">
      <button className="btn btn-primary">Hire Us Now</button>
    </div>
  </div>
</div>


           </div>
        </div>
    );
};

export default DetailsEvents;