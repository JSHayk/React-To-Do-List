import "./CSS/headerFormer.css";
import { FaSearch } from "react-icons/fa";

export default () => {
    return (
        <div id="header-second-former">
            <div className="header-second-former-search">
                <div className="search-icon">
                    <FaSearch/>
                </div>
                <input type="text" id="search-input" placeholder="Search here" />
            </div>
        </div>
    )
}