import {createStore, combineReducers, applyMiddleware} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducers';
import {usersReducer} from './usersReducer';
import { authReducer } from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
}); //same with profileReducer: profileReducer, dialogsReducer: dialogsReducer

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;