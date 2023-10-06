import { Link } from "react-router-dom";


const Events = ({event}) => {

    const{name,image,id}=event;
    return (
        <div>
            
            <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img className="lg:w-96 h-[300px] w-[100%]  rounded-lg" src={image}alt="events" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{name}</h2>
   <div className="">
    <Link to={`/event/${id}`} className="btn font-bold  bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 ">Details</Link>
   </div>
    
  </div>
</div>

         








        </div>
    );
};

export default Events;