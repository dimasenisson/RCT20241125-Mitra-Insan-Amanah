import { useEffect, useState } from "react";
import { loadScript } from "../constants";
import { NavLink, useLocation } from "react-router-dom";
import { logo } from "../assets";
import { menus } from "../constants";

function Header() {

    const pathName = useLocation()
    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        loadScript("js/sticky-header.js");
    })

    const handleToggleMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <header className={"site-header header-style-1 mobile-sider-drawer-menu "+(isActive? 'active' : '')}>
            {/* Search Link */}
            <div className="header-middle bg-white">
                <div className="container">
                    <div className="logo-header">
                        <NavLink to='#home'>
                            <img src={logo} width={216} height={37} alt="" />
                        </NavLink>
                    </div>
                    <div className="header-info">
                        <ul>
                            <li>
                                <div>
                                    <strong>Telepon</strong>
                                    <span>08123456789</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong>Email</strong>
                                    <span>mitrainsanamanah@gamil.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="sticky-header main-bar-wraper">
                <div className="main-bar header-botton nav-bg-primary">
                    <div className="container">
                        {/* NAV Toggle Button */}
                        <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed" onClick={handleToggleMenu}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar icon-bar-first" />
                            <span className="icon-bar icon-bar-two" />
                            <span className="icon-bar icon-bar-three" />
                        </button>
                        
                        
                        <div className="logo-show-in-mobile">
                            <NavLink to="#home">
                                <img src={logo} width={216} height={37} alt="" />
                            </NavLink>
                        </div>
                        

                        <div className="header-nav navbar-collapse collapse d-flex justify-content-start">
                            <ul className=" nav navbar-nav">
                                {menus.map((item, index) => (
                                    <li key={index} className={pathName.hash.includes(item.id) ? 'active' : ''}>
                                        <a href={item.id} onClick={handleToggleMenu}>{item.label}</a>
                                    </li>
                                    
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;