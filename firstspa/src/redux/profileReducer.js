import { userAPI, profileAPI } from '../api/api';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST_BY_INDEX = "DELETE_POST_BY_INDEX";

let initialState = {
    postsRawData: [
        { id: 1, text: 'Post 1', likesCount: '1' },
        { id: 2, text: 'Post 2', likesCount: '231' },
        { id: 3, text: 'Post 3', likesCount: '547' },
        { id: 4, text: 'Post 4', likesCount: '14' },
        { id: 5, text: 'Post 5', likesCount: '1' },
        { id: 6, text: 'Post 6', likesCount: '8' }],
    profile: null,
    status: ""
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postsRawData[state.postsRawData.length - 1] + 1,
                text: action.postText,
                likesCount: 0
            };

            return {
                ...state,
                newPostText: '',
                postsRawData: [...state.postsRawData, newPost]
            };
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
        case DELETE_POST_BY_INDEX: {
            return {
                ...state,
                postsRawData: state.postsRawData.filter(x => x.id !== action.index)
            }
        }
        default:
            return state;
    }
}

export let addPostActionCreator = (postText) => ({ type: ADD_POST, postText });

export let setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, profile: userProfile })

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export let setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const deletePost = (index) => ({ type: DELETE_POST_BY_INDEX, index });