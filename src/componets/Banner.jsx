import Navbar from "./Navbar";
import BaNner from './image/2.jpg'

const Banner = () => {





  const bannerStyle={
    
    backgroundImage:`url(${BaNner})`
}




    return (
        <div>
            
       

          <div className="hero min-h-screen" style={bannerStyle}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          
          
          >
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1  className="mb-5 text-lg font-bold " ><Navbar></Navbar></h1>
    
</div>
</div>

 </div>

          </div>

   
    );
};

export default Banner;