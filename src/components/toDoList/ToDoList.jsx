import "./CSS/toDoList.css";
import { useReducer, useMemo, useCallback } from "react";
import ToDoListFirstSide from "./toDoListSrc/toDoListFirstSide/ToDoListFirstSide";
import ToDoListSecondSide from "./toDoListSrc/toDoListSecondSide/ToDoListSecondSide";
import ToDoListAdd from "./toDoListSrc/toDoListAdd/ToDoListAdd";
import ToDoListDefaultAdd from "./toDoListSrc/toDoListAdd/toDoListDefaultAdd/ToDoListDefaultAdd";
import ToDoListShowAdd from "./toDoListSrc/toDoListAdd/toDoListShowAdd/ToDoListShowAdd";
import addReducer from "./toDoListSrc/reducers/addReducer";
import dataReducer from "./toDoListSrc/reducers/dataReducer";

export default () => {
  const [data, dataDispatch] = useReducer(dataReducer, [
    {
        id: Math.random(),
        txt: "Weekly Bigbazar Shopping",
        done: false,
    },
    {
        id: Math.random(),
        txt: "Go Outside Picnic on Sunday",
        done: false,
    },
    {
        id: Math.random(),
        txt: "Write a blog post",
        done: true,   
    }
  ]);
  const hideShow = () => {
    addDispatch({
    type: "hide-show",
    payload: {
        cont: <ToDoListDefaultAdd showAdd={showAdd} />
    }
    });
  }  
  
  const addTask = (item) => {
    dataDispatch({
        type: 'add-list-item',
        payload: {
            txt: item.txt,
            id: Math.random(),
            done: item.done
        }
    });
  }

  const showAdd = () => {
    addDispatch({
        type: 'showAdd',
        payload: {
            cont: <ToDoListShowAdd addTask={addTask} hideShow={hideShow} />
        }
    })
  } 

  const doneItem = doneId => {
    dataDispatch({
        type: 'done-item',
        payload: {
            doneId: doneId
        }
    });
  }

  const markAllItems = useCallback(() => {
    dataDispatch({
        type: "mark-all-items"
    })
  }, []);

  const removeItem = removeId => {
    dataDispatch({
        type: "remove-item",
        payload: {
            removeId: removeId
        }
    });
  }

  const [addCont, addDispatch] = useReducer(addReducer, {
        cont: <ToDoListDefaultAdd showAdd={showAdd} />
  });

  const firstVals = useMemo(() => {
    return {
        subtitle: "To-Do",
        markFinishedText: "Mark all as finished"
    }
  }, []);

    return (
        <div id="to-do-list">
            <div className="to-do-list-title">ToDo</div>
            <div className="to-do-list-cont">
                <ToDoListFirstSide markAllItems={markAllItems} firstVals={firstVals} />
                <ToDoListSecondSide data={data} doneItem={doneItem} removeItem={removeItem} />
                <ToDoListAdd>
                    { addCont.cont }
                </ToDoListAdd>
            </div>
        </div>

    );
}