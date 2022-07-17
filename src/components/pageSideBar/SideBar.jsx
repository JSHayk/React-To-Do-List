import "./CSS/sidebar.css";
import "./CSS/sidebarItems.css";
import Component from "./sideBarSrc/components/Component";
import General from "./sideBarSrc/general/General";
import Forms from "./sideBarSrc/forms/Forms";

export default () => {
    return (
        <div className="side-bar">
            <div className="side-bar-cont">
                <General />
                <Component />
                <Forms />
            </div>
        </div>
    )
}   