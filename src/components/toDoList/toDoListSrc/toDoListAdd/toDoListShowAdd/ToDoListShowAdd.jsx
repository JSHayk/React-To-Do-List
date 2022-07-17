import "./CSS/toDoListShowAdd.css";
import { useRef, useState } from "react";

export default ({hideShow, addTask}) => {
    const [ addVal, setVal] = useState("");
    const onCloseShow = () => {
        hideShow();
    }

    const onAddTask = () => {
       if (addVal.trim()) {
            addTask({
                txt: addVal,
                done: false
            });
            setVal("");
       }
    }

    const onChangeText = (e) => {
        setVal(e.target.value);
    }

    return (
        <div id="to-do-list-show-add">
            <div>
                <textarea value={addVal} onChange={onChangeText} className="to-do-list-textarea" placeholder="Enter New Task Here"></textarea>
            </div>
            <div className="to-do-list-btns">
                <button onClick={onCloseShow} type="button" className="show-add-btn show-add-close">Close</button>
                <button onClick={onAddTask} type="button" className="show-add-btn show-add-task">Add Task</button>
            </div>
        </div>
    )
}