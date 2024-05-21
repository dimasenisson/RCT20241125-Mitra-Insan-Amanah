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
import { companyName, missions, services } from "../../../constants";

const Missions = () => {
  return (
    <div className="section-full bg-change-section overlay-wraper p-t80 p-b50">
        <div className="overlay-main bg-secondry opacity-09" />
        <div className="bg-changer">
            <div className=" section-bg active" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg1.jpg")})` }} />
            <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg2.jpg")})` }} />
            <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg3.jpg")})` }} />
            <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg4.jpg")})` }} />
            <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg5.jpg")})` }} />
            <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg6.jpg")})` }} />
        </div>
        <div className="container">
            {/* TITLE START*/}
            <div className="section-head text-center text-white">
                <h2 data-title="Misi Kami">Misi Kami</h2>
                <div className="mt-separator-outer">
                    <div className="mt-separator site-bg-primary" />
                </div>
            </div>
            {/* TITLE END*/}
            <div className="section-content">
                <div className="row">
                    {missions.map((item, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                            <div className="mt-icon-box-wraper  p-a30 bgcall-block hover-shadow hover-border-outer hover-border m-b30">
                                <div className="icon-md radius m-b15">
                                    <span className="icon-cell  text-white"><i className={item.icon} /></span>
                                </div>
                                <div className="icon-content">
                                    <h4 className="mt-tilte  m-b15 site-text-primary">
                                        {item.title}
                                    </h4>
                                    <p className="text-white">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Missions
