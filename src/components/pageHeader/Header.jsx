import "./CSS/header.css";
import headerLogo from '../../assets/images/logo.png';
import HeaderFirstSide from "./headerSrc/headerFirstSide/HeaderFirstSide";
import HeaderSecondSide from "./headerSrc/headerSecondSide/HeaderSecondSide";

export default () => {
    return (
        <header>
            <div id="header-cont">
                <HeaderFirstSide logoSrc={headerLogo} />
                <HeaderSecondSide />
            </div>
        </header>
    )
}