import { useEffect } from "react";
import { loadScript, route, publicUrlFor } from "../../../globals/constants";
import FastImage from "../../../globals/elements/fastimg";
import CountUp from "react-countup";
import SectionSlider1 from "../../sections/home/home1/section-slider1";
import { NavLink } from "react-router-dom";
import SectionHome1Team from "../../sections/home/home1/section-home1-team";
import SectionHome1Plans from "../../sections/home/home1/section-home1-plans";
import SectionHome1Blogs from "../../sections/home/home1/section-home1-blogs";
import SectionHome1Testimonials from "../../sections/home/home1/section-home1-testimonials";
import _data from "../../../globals/data/data.json";
import { abouts, companyName, missions, services } from "../../../constants";
import Missions from "./Missions"
import AboutUs from "./AboutUs";
import Services from "./Services";
import Clients from "./Clients";

function Home1Page() {

    const { clients } = _data;

    useEffect(() => {
        loadScript("js/custom.js");
    })

    return (
        <>
            <SectionSlider1 />
            <AboutUs />
            <Missions /> 
            <Services/>
            <Clients/>
        </>
    )
}
export default Home1Page;