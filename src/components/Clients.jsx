import { clients } from "../constants"

const Clients = () => {
    return (
        <div id="klien" className="section-full p-t80 p-b80 bg-center bg-full-height bg-no-repeat bg-white">
            <div className="container">
                
                <div className="section-head text-center">
                    <h2 data-title="Pengalaman">Klien Kami</h2>
                    <div className="mt-separator-outer">
                        <div className="mt-separator site-bg-primary" />
                    </div>
                </div>
                
                <div className="section-content">
                    <div className="section-full bg-white p-tb50">
                        <div className="container">
                            <div className="section-content">
                                <div className="owl-carousel home-client-logo owl-btn-vertical-center">

                                    {
                                        clients.map((item, index) => {
                                            return <div key={index} className="item">
                                                <img src={item} alt="" style={{ height: '2rem !important'}} /> {/* <NavLink to={route.pages.team.TEAM}><FastImage src={_item} alt="" /></NavLink> */}
                                            </div>
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients
