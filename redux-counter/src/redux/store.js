import { createStore } from "redux";

const reducer = (state = 0, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'INCRE': return state + 1;
        case 'DECRE': return state - 1;
        default: return state;
    }
}

export const store = createStore(reducer);