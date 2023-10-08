import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Events from './image/events3.jpg'


const Discount = () => {

 const backStyle={
    
    backgroundImage:`url(${Events})`
}




    return (
        <div>
         
            <div className="my-3">
                         <Navbar></Navbar>
            <div className="hero min-h-screen" style={backStyle}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-purple-600 font-bold">30% Discount</h1>
      <p className="mb-5 font-bold text-black">Customers Can Get Discount If They Hire us Second Time</p>
      <Link to='/' className="btn btn-primary">Hire us Now</Link>
    </div>
  </div>
</div>














            </div>
        </div>
    );
};

export default Discount;