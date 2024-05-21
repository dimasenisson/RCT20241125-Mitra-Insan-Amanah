import { useEffect } from "react";
import { loadScript } from "./constants";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Vision from "./components/Vision";
import Missions from "./components/Missions";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import { Element } from "react-scroll";

function App() {

  useEffect(() => {
    loadScript("js/custom.js");
  })

  return (
    <>
      <Element name="home">
        <Header/>
        <Hero/>
        <Element name="tentang-kami">
          <AboutUs/>
        </Element>
        
        <Element name="visi">
        <Vision />
        </Element>        

        <Missions/>

        <Element name="layanan">
        <Services/>
        </Element>

        <Element name="klien">
        <Clients/>
        </Element>

        <Element name="kontak">
        <Footer/>
        </Element>
      </Element> 
    </>
  );
}

export default App;
