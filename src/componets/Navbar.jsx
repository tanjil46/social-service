import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="my-4">
            <nav className="flex justify-center space-x-4   bg-gradient-to-r from-sky-500 to-indigo-500 py-5 lg:px-12 px-8 rounded-xl"    >
     
   
      <NavLink  to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Home</NavLink>








<NavLink to="/discount" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Discount</NavLink>

<NavLink to="/about" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>About Us</NavLink>

 </nav>



        </div>
    );
};

export default Navbar;