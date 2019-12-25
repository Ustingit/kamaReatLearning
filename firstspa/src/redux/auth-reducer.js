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
                isAuthenticated: true
            };
        }
        default:
            return state;
    }
}

export let setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data.id,
                response.data.data.email,
                response.data.data.login));
        }
    });
}