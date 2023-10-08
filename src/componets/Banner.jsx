import Navbar from "./Navbar";
// import banner from './image/paradise.JPG'

const Banner = () => {




    return (
        <div>
            
       

          <div className="hero min-h-screen" style={{backgroundImage: 'url()'}} 
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