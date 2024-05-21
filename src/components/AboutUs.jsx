import { publicUrlFor } from "../constants"
import { abouts } from "../constants"
import { bgAboutUs } from "../assets"

const AboutUs = () => {
  return (
    <div id="tentang-kami" className="section-full p-t80 p-b50 bg-no-repeat bg-center bg-white" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-map.png")})` }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="mt-box m-b30">
                        <div className="mt-thum-bx mt-img-effect  mt-img-overlay2">
                            <img src={bgAboutUs} alt="" />
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
