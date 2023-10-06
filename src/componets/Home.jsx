import Banner from "./Banner";
import Customerreviwe from "./Customerreviwe";
import EventsFoodMenu from "./EventsFoodMenu";
import Navbar from "./Navbar";
import Services from "./Services";


const Home = () => {
    return (
        <div>
           <Navbar></Navbar> 
        <Banner></Banner>
        <Services></Services>
        <EventsFoodMenu></EventsFoodMenu>
        <Customerreviwe></Customerreviwe>
        </div>
    );
};

export default Home;