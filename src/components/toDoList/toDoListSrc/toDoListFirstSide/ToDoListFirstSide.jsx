import "./CSS/toDoListFirstSide.css";
import { AiFillCheckSquare } from "react-icons/ai";
import { memo } from "react";

export default memo(({firstVals, markAllItems}) => {
    const { subtitle, markFinishedText } = firstVals;
    const onMarkAllItems = () => {
        markAllItems();
    }
    console.log('ok');
    return (
        <div id="to-do-list-first-side">
            <div className="to-do-list-subtitle">{subtitle}</div>
            <div className="to-do-list-finished-mark">
                <div className="to-do-list-finished-mark-text">{markFinishedText}</div>
                <div onClick={onMarkAllItems} className="to-do-list-finished-mark-icon"><AiFillCheckSquare /></div>
            </div>
        </div>
    )
});