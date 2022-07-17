import "./CSS/toDoListDefaultAdd.css";
import { useRef } from "react";

export default ({showAdd}) => {
   const defaultBtn = useRef();

    const showAddFunc = (e) => {
        showAdd(defaultBtn.current);
    }

    return (
        <div id="list-add">
            <button ref={defaultBtn} onClick={showAddFunc} type="button" className="list-add-default">Add new task</button>
        </div>
    )
}