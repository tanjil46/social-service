

const CustomerInfo = ({review}) => {

 const{name,address,image,email,review_text}=review;

    return (
        <div>
           
            <div className="card card-compact w-96 bg-base-100 shadow-xl"  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"
        >
  <figure><img src={image} alt="customers" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name:{name}</h2>
    <p>{review_text}</p>
    <div className="card-actions justify-center">
    <p>Address:{address}</p>
    <p>E-mail:{email}</p>
    
    </div>
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
  </div>
</div>










        </div>
    );
};

export default CustomerInfo;