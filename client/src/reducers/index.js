import { combineReducers } from 'redux';
import config from './config_reducer';
import showsReducer from "./showSlice";



const rootReducer = combineReducers(
{
    config: config,
    shows: showsReducer
});
export default rootReducer;
