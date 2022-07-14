import { combineReducers } from 'redux';
import config from './config_reducer';
import {showReducer} from "./showReducer";



const rootReducer = combineReducers(
{
    config: config,
    allShows: showReducer
});
export default rootReducer;
