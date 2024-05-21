// import { route } from "../../../../globals/constants";
// import FastImage from "../../../../globals/elements/fastimg";
// import { NavLink } from "react-router-dom";
// import _data from "../../../../globals/data/data.json";

import { route } from "../../../globals/constants"
import FastImage from "../../../globals/elements/fastimg"
import { NavLink } from "react-router-dom"
import _data from "../../../globals/data/data.json"

const Services = () => {
    const { team2 } = _data.team;

    return (
        <div className="section-full text-center mt-our-team bg-gray p-t80 p-b50">
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
                                            {/* Block 1 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic1.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Less than truckload</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 2 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic2.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Trucking &amp; Warehousing</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 3 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic3.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Sea Delivery</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible.</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 4 */}
                                            <div className="item  overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic4.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Logistic Services</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 5 */}
                                            <div className="item  overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic5.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Ground Shipping</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 6 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic6.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">International Air Freight</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 7 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic7.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Rail Shipping</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 8 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic8.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Frost Shipping</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
