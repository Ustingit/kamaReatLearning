import Axios from 'axios';

const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";

let initialState = {
    users: [ ],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [ ]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(x => {
                    if (x.id === action.userId) {
                        return {...x, followed: true };
                    }
                    return x;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(x => {
                    if (x.id === action.userId) {
                        return {...x, followed: false };
                    }
                    return x;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users } //merge of 2 arrays
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT: 
            return { ...state, totalUsersCount: action.count }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING:
            return { 
                ...state, 
                followingInProgress: action.isFollowing 
                ? [...state.followingInProgress, action.userId] // add userId to the end of the array
                : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state;
    }
}

export let follow = (userId) => ({ type: FOLLOW, userId }); // AC - action creator
export let unfollow = (userId) => ({ type: UNFOLLOW, userId });
export let setUsers = (users) => ({ type: SET_USERS, users: users });
export let setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, currentPage: page });
export let setItemsCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalCount });
export let setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });
export let setIsFollowing = (isFollowing, userId) => ({ type: TOGGLE_IS_FOLLOWING, isFollowing, userId });
