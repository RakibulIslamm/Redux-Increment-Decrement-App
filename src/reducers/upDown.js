const initialState = 13;

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + action.payload;
        case 'DECREMENT': return state > 3 ? state - action.payload : 0;
        default: return state;
    }
}

export default changeTheNumber;