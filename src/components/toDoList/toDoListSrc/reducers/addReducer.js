export default function addReducer(state, action) {
    if (action.type === 'showAdd') {
        return {
            cont: action.payload.cont
        }
    } else if (action.type === "hide-show") {
        return {
            cont: action.payload.cont
        }
    }

    return state;
}