import { FaCheck  } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import "./CSS/listItem.css";
import { useRef } from "react";

export default ({item, doneItem, removeItem}) => {
  let style = {
    textDecoration: "none"
  }
  
  if (item.done) {
    style = {
      textDecoration: "line-through",
      color: "rgb(38, 105, 92)",
    }
  }

  const onDoneItem = () => {
    doneItem(item.id);
  }

  const onRemoveItem = () => {
    removeItem(item.id);
  }

    return (
        <div className="list-item">
            <div style={style} className="list-item-text">{item.txt}</div>
            <div className="list-item-btns">
                <div onClick={onRemoveItem} className="list-item-remove-btn list-item-btn"><RiDeleteBinLine /></div>
                <div onClick={onDoneItem} className="list-item-done-btn list-item-btn"><FaCheck /></div>
            </div>
        </div>
    )
}