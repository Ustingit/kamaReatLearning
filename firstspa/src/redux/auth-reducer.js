import { authAPI } from '../api/api';

const SET_USER_DATA = "SET_USER_DATA";

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

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data.id,
                response.data.data.email,
                response.data.data.login,
                true));
        }
    });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    });
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false)); 
        }
    });
}