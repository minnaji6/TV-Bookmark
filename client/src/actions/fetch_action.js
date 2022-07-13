const FETCH_ACTION = 'FETCH_ACTION';

function FETCH_ACTION_ACTION(payload) {
  return {
    type: FETCH_ACTION,
    payload,
  };
}  

const initialState = {

};

const Reducer = (state = initialState, action) => {
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