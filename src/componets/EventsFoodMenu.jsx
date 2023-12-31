import Desert from './image/desert.jpg'
import Foods from './image/item.jpg'
import Cake from './image/cake2.jpg'
import Milk from './image/shake.jpg'
const EventsFoodMenu = () => {
    return (
        <div className="my-8">
           <p className="text-center font-bold text-white bg-pink-500 py-2 px-4 rounded-lg text-2xl mb-4">Foods We Serve</p>
            
            <div className="carousel h-[700px] w-full"    data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"   >
  <div id="slide1" className="carousel-item relative w-full">
    <img src={Desert} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={Foods} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={Cake} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={Milk} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>










        </div>
    );
};

export default EventsFoodMenu;