import Banner from "./Banner";
import Customerreviwe from "./Customerreviwe";
import EventsFoodMenu from "./EventsFoodMenu";
import Footer from "./Footer";

import Services from "./Services";


const Home = () => {
    return (
        <div>
      
        <Banner></Banner>
        <Services></Services>
        <EventsFoodMenu></EventsFoodMenu>
        <Customerreviwe></Customerreviwe>
        <Footer></Footer>
        </div>
    );
};

export default Home;