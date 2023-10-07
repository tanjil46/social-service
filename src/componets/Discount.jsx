import { Link } from "react-router-dom";
import Navbar from "./Navbar";



const Discount = () => {
    return (
        <div>
         
            <div className="my-3">
                         <Navbar></Navbar>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(./public/image/events3.jpg)'}}>
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