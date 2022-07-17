import "./CSS/headerFirstSide.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default ({logoSrc}) => {
    return (
        <div id="header-first-side">
            <div className="header-logo">
                <img src={logoSrc}  />
            </div>
            <div className='header-sidebar-hide'>
                <GiHamburgerMenu />
           </div>     
        </div>
    )
}