import { combineReducers } from 'redux';
import config from './config_reducer';
import {showReducer, selectedShowReducer} from "./showReducer";



const rootReducer = combineReducers(
{
    config: config,
    show: selectedShowReducer,
    allShows: showReducer
});
export default rootReducer;
