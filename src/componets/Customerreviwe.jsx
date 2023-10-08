import { useEffect, useState } from "react";
import CustomerInfo from "./CustomerInfo";


const Customerreviwe = () => {
const[reviews,setReviews]=useState([])



    useEffect(()=>{

        fetch('reviwe.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
       },[])
       







    return (
        <div>
          
          <p className="text-center text-white  font-bold text-2xl  bg-pink-500 py-2 px-4 rounded-lg">Our Some Dear Customers reviwed Us</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 py-6 px-10">


            {
                reviews.map(review=><CustomerInfo review={review} key={review.id}></CustomerInfo>)
            }



            </div>










        </div>
    );
};

export default Customerreviwe;