import { AiOutlineStar, AiOutlineBell, AiOutlineComment } from "react-icons/ai";
import { HiOutlineMoon } from "react-icons/hi";
import "./CSS/headerLatestIcons.css";

export default () => {
    return (
        <div className="header-latest-icons">
            <div className="header-latest-icon star-icon"><AiOutlineStar /></div>
            <div className="header-latest-icon bell-icon"><AiOutlineBell /></div>
            <div className="header-latest-icon moon-icon"><HiOutlineMoon /></div>
            <div className="header-latest-icon comment-icon"><AiOutlineComment /></div>
        </div>
    )
}