

export default Reducer(state = initialState, action) => {
    switch (action.type) {
        case FETCH_ACTION:
        return {
            ...state,
            ...action.payload,
        };
        default:
        return state;
    }
    }