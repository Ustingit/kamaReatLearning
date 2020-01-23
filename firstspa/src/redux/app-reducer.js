import { getAuthUserData } from './auth-reducer';

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    isInitialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                isInitialized: true
            };
        }
        default:
            return state;
    }
}

export let initializedSuccessfully = () => ({ type: SET_INITIALIZED });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccessfully());
    });
}