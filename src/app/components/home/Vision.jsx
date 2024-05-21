import { visi } from "../../../constants"
import { publicUrlFor } from "../../../globals/constants"
import FastImage from "../../../globals/elements/fastimg"

const Vision = () => {
    return (
        <div id="visi" className="section-full p-t80 p-b80 bg-center bg-full-height bg-no-repeat bg-gray" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-map.png")})` }}>
            <div className="container">
                {/* TITLE START */}
                <div className="section-head text-center">
                    <h2 data-title="Visi Kami">Visi Kami</h2>
                    <div className="mt-separator-outer">
                        <div className="mt-separator site-bg-primary" />
                    </div>
                </div>
                {/* TITLE END */}
                <div className="section-content">
                    <div className="testimonial-2  clearfix  bg-white">
                        <div className="testimonial-text">
                            <span className="fa fa-quote-left" />
                            <p>{visi}</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Vision
