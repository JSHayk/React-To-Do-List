import "./CSS/toDoListSecondSide.css";
import ListItem from "./listItem/ListItem";

export default ({data, doneItem, removeItem}) => {
    const style = {
        height: "100%"
    }

    if (data.length > 10) {
        style.height = "100vh";
    }

    return (
        <div style={style} id="to-do-list-second-side">
            <div className="to-do-list-items">
                {
                    data.map(item => {
                        return <ListItem removeItem={removeItem} doneItem={doneItem} key={item.id} item={item} />
                    })
                }
            </div>
        </div>

    )
}