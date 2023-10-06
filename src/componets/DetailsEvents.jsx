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

           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <img  src={image} className="rounded-lg w-full" />
    <div className="">
      <h1 className="text-2xl w-full text-center font-bold">{name}</h1>
      <div className="flex justify-between">
      <p className="py-6">{short_description}</p>
        <button>

          <span className="">{price}</span>  
        </button>
        </div>
    </div>
  </div>
</div>




           </div>
        </div>
    );
};

export default DetailsEvents;