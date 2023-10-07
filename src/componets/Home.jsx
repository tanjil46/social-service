import Banner from "./Banner";
import Customerreviwe from "./Customerreviwe";
import EventsFoodMenu from "./EventsFoodMenu";
import Footer from "./Footer";
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
        <Footer></Footer>
        </div>
    );
};

export default Home;