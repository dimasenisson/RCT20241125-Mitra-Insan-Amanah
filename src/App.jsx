import { useEffect } from "react";
import { loadScript } from "./constants";
import SectionHeader1 from "./components/header1";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Vision from "./components/Vision";
import Missions from "./components/Missions";
import Services from "./components/Services";
import Clients from "./components/Clients";
import SectionFooter1 from "./components/footer1";

function App() {

  useEffect(() => {
    loadScript("js/custom.js");
  })

  return (
    <>
      <div id="home">
        <SectionHeader1/>
        <Hero/>
        <AboutUs/>
        <Vision />
        <Missions/>
        <Services/>
        <Clients/>
        <SectionFooter1/>
      </div> 
    </>
  );
}

export default App;
