import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import Missions from "./Missions"
import AboutUs from "./AboutUs";
import Services from "./Services";
import Clients from "./Clients";
import Vision from "./Vision";
import Hero from "./Hero";

function Home1Page() {

    useEffect(() => {
        loadScript("js/custom.js");
    })

    return (
        <div id="home">
            <Hero/>
            <AboutUs />
            <Vision/>
            <Missions /> 
            <Services/>
            <Clients/>
        </div>
    )
}
export default Home1Page;