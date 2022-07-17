export default function dataReducer(state, action) {
    if (action.type === "add-list-item") {
        return [
            ...state,
            {
                id: action.payload.id,
                txt: action.payload.txt,
                done: action.payload.done
            }
        ]
    } else if (action.type === "done-item") {
        return state.filter(item => {
            if (item.id === action.payload.doneId) {
                return item.done = true;
            } else {
                return item;
            }
        });
    } else if (action.type === "remove-item") {
        return state.filter(item => item.id !== action.payload.removeId);
    } else if (action.type === "mark-all-items") {
        return state.map(item => {
            return {
                ...item,
                done: true
            }
        });
    }

    return state;
}
