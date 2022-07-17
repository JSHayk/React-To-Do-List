import "./CSS/main.css";
import MainSecondSide from "./mainSrc/mainSecondSide/mainSecondSide";
import SideBar from "../pageSideBar/SideBar";

export default () => {
    return (
        <main>
            <SideBar />
            <MainSecondSide />
        </main>
    )
}
