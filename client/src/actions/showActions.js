import { ActionTypes } from "./ActionTypes"

export const setShows = (shows) => {
    return {
      type: ActionTypes.SET_SHOWS,
      payload: shows,
    };
  };
  
  export const selectedShow = (show) => {
    return {
      type: ActionTypes.SELECTED_SHOW,
      payload: show,
    };
  };
  export const removeSelectedShow = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_SHOW,
    };
  };