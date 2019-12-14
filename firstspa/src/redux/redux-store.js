import {createStore, combineReducers} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducers';

let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer
}); //same with profileReducer: profileReducer, dialogsReducer: dialogsReducer

let store = createStore(reducers);
window.store = store;

export default store;