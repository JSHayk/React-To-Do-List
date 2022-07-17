import "./CSS/headerSecondSide.css";
import HeaderFormer from "./headerFormer/HeaderFormer";
import HeaderLatest from "./headerLatest/HeaderLatest";

export default () => {
    return (
        <div id="header-second-side">
            <HeaderFormer />
            <HeaderLatest />
        </div>
    )
}