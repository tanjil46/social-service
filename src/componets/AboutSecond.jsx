

const AboutSecond = ({about}) => {

 const{phone_number,name,address,image,role}=about;






    return (
        <div>
            
            <div className="card  bg-base-100 my-10 ">
  <figure><img className="w-full h-[300px] lg:w-96 rounded-lg" src={image} alt="Employee" /></figure>
  <div className="flex justify-center gap-4">
    <h2 className="text-lg">{name}</h2>
    <p className="text-xl font-bold">Role:{role}</p>
    
  </div>
  <div className="flex justify-center gap-4">
  <h2 className="text-lg">Address:{address}</h2>
    <p className="text-xl font-bold">Phone:{phone_number}</p>

  </div>
</div>












        </div>
    );
};

export default AboutSecond;