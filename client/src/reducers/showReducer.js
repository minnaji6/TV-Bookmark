import { ActionTypes } from "../actions/ActionTypes";

const  initialState = {
    shows:[],
};
export const showReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_SHOWS:
            return {...state, shows: payload};
        default:
            return state;
    }
}

export const selectedShowReducer = (state ={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_SHOW:
            return {...state, ...payload};
        default:
            return state;
    }
}