import { ActionTypes } from "./ActionTypes"
export const setShows = (shows) => {
    return {
        type: ActionTypes.SET_SHOWS,
        paylod: shows,
        
    };
};

export const selectedShow = (shows) => {
    return {
        type: ActionTypes.SELECTED_SHOW,
        paylod: shows,
        
    };
};

// export const removeSelectedShow = (shows) => {
//     return {
//         type: ActionTypes.REMOVE_SELECTED_SHOW,
//         paylod: shows,
        
//     };
// };
