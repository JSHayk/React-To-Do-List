import "./CSS/headerLatest.css";
import HeaderLatestIcons from "./headerLatestSrc/headerLatestIcons/headerLatestIcons";
import HeaderLatestLogOut from "./headerLatestSrc/headerLatestLogOut/HeaderLatestLogOut";

export default () => {
    return (
        <div id="header-second-latest">
            <HeaderLatestIcons />
            <HeaderLatestLogOut btnTxt="Log Out" />
        </div>
    )
}