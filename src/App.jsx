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

function App() {

  useEffect(() => {
    loadScript("js/custom.js");
  })

  return (
    <>
      <div id="home">
        <Header/>
        <Hero/>
        <AboutUs/>
        <Vision />
        <Missions/>
        <Services/>
        <Clients/>
        <Footer/>
      </div> 
    </>
  );
}

export default App;
