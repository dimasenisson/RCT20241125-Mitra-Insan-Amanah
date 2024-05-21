import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import Missions from "../../../components/Missions"
import AboutUs from "../../../components/AboutUs";
import Services from "../../../components/Services";
import Clients from "../../../components/Clients";
import Vision from "../../../components/Vision";
import Hero from "../../../components/Hero";

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