import { Link } from "react-router-dom";


const Errorrouter = () => {
    return (
        <div className="h-screen flex justify-center items-center flex-col gap-3">
           <p className="text-2xl font-bold">404 DATA NOT FOUND</p>
           <Link className="btn btn-secondary" to='/'>Back To Home</Link>
        </div>
    );
};

export default Errorrouter;