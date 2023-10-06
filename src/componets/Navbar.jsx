import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="my-4">
            <nav className="flex justify-center space-x-4">
     
        
      <NavLink  to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-500 border-b" : ""}>Home</NavLink>



<NavLink to="" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-500 border-b" : ""}>Address</NavLink>






<NavLink to="" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-500 border-b" : ""}>Discount</NavLink>

<NavLink to="" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-500 border-b" : ""}>Upcoming Events</NavLink>






    

      </nav>
        </div>
    );
};

export default Navbar;