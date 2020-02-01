import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = "KAMA/AUTH/SET_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthenticated: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuthenticated: action.data.isAuth
            };
        }
        default:
            return state;
    }
}

export let setAuthUserData = (userId, email, login, isAuth) => ({ 
    type: SET_USER_DATA, 
    data: { userId, email, login, isAuth } 
});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(response.data.data.id,
            response.data.data.email,
            response.data.data.login,
            true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Credentials are wrong";
        dispatch(stopSubmit("login", {_error: message})); //this is unique form name - LoginReduxFrom, possible are: email, password, _error
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false)); 
    }
}