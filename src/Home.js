import Cards from "./Cards";
import Category from "./Category";
import Filter from "./Filter";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Staples from "./Staples";

export default function Home(){
    return(<>
        <Navbar/>
        <Slider/>
        <Cards/>
       <Filter/>
       <Footer/>
    </>)
}