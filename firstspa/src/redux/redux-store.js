import {createStore, combineReducers} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducers';
import {usersReducer} from './usersReducer';

let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
}); //same with profileReducer: profileReducer, dialogsReducer: dialogsReducer

let store = createStore(reducers);
window.store = store;

export default store;