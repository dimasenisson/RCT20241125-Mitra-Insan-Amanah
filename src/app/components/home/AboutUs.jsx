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

const AboutUs = () => {
  return (
    <div className="section-full p-t80 p-b50 bg-no-repeat bg-center bg-white" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-map.png")})` }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="mt-box m-b30">
                        <div className="mt-thum-bx mt-img-effect  mt-img-overlay2">
                            <FastImage src="images/background/bg12.jpg" alt="" />
                            <a href="https://player.vimeo.com/video/66491481" className="mfp-video play-now">
                                <i className="icon fa fa-play" />
                                <span className="ripple" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="sx-shipment-wrap">
                        <div className="mt-box m-b25">
                            <h2 className="display-block m-b15 m-t0">
                                  Logistik yang Terpercaya, Pengiriman yang Aman, bersama 
                                  <span className="site-text-primary"> Mitra Insan Amanah</span>
                            </h2>
                            {abouts.map((item, index) => (
                                <p key={index} className="m-b15">{item}</p>  
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
