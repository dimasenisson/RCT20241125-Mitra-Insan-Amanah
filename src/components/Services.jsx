// import { route } from "../../../../globals/constants";
// import FastImage from "../../../../globals/elements/fastimg";
// import { NavLink } from "react-router-dom";
// import _data from "../../../../globals/data/data.json";

import { route } from "../globals/constants"
import FastImage from "../globals/elements/fastimg"
import { NavLink } from "react-router-dom"
import _data from "../globals/data/data.json"
import { services } from "../constants"

const Services = () => {
    const { team2 } = _data.team;

    return (
        <div id="layanan" className="section-full text-center mt-our-team bg-gray p-t80 p-b50">
            <div className="container">
                {/* TITLE START*/}
                <div className="section-head text-center">
                    <h2 data-title="Layanan">Layanan Kami</h2>
                    <div className="mt-separator-outer">
                        <div className="mt-separator site-bg-primary" />
                    </div>
                </div>
                {/* TITLE END*/}
                <div className="section-content">
                <div className=" filter-carousal-1-outer">
                                <div className="filter-carousal-1">
                                    {/* IMAGE CAROUSEL START */}
                                    <div className="section-content">
                                        <div className="owl-carousel owl-carousel-filter  owl-btn-vertical-center fillter-nav-left">
                                            {services.map((item, index) => (
                                               <div key={index} className="item overflow-hide">
                                                    <div className="mt-box">
                                                        <div className="mt-img-effect overlay-2">
                                                            <img src={item.image} alt="" />
                                                            <div className="overlay-2-bg bg-black" />
                                                            <div className="overlay-2-content">
                                                                <div className="p-a30 p-b20">
                                                                    <h4 className="m-t0 m-b15 site-text-primary">{item.title}</h4>
                                                                    <p className="m-b20 text-white">{item.text}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> 
                                            ))}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default Services
