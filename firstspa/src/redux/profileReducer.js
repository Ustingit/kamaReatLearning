import { userAPI, profileAPI } from '../api/api';

const ADD_POST = "ADD-POST";
const SET_TEXT_FOR_NEW_POST = "SET-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
    postsRawData: [
        { id: 1, text: 'Post 1', likesCount: '1' },
        { id: 2, text: 'Post 2', likesCount: '231' },
        { id: 3, text: 'Post 3', likesCount: '547' },
        { id: 4, text: 'Post 4', likesCount: '14' },
        { id: 5, text: 'Post 5', likesCount: '1' },
        { id: 6, text: 'Post 6', likesCount: '8' }],
    newPostText: "Введите текст поста",
    profile: null,
    status: ""
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postsRawData[state.postsRawData.length - 1] + 1,
                text: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                newPostText: '',
                postsRawData: [...state.postsRawData, newPost]
            };
        }
        case SET_TEXT_FOR_NEW_POST: {
            return {
                ...state,
                newPostText: action.newPostText,
                postsRawData: [...state.postsRawData]
            };  //spread operator
            //stateCopy.newPostText = {...state.newPostText};
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostActionCreator = (text) => {
    return {
        type: SET_TEXT_FOR_NEW_POST,
        newPostText: text
    };
}

export let setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, profile: userProfile })

export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
      });
}

export let setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data));
      });
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
      });
}