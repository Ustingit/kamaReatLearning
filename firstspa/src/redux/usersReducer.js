import Axios from 'axios';

const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    users: [ ],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            Axios
            .post(`https://social-network.samuraijs.com/api/1.0/follow/${action.userId}`, {}, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    return {
                        ...state,
                        users: state.users.map(x => {
                            if (x.id === action.userId) {
                                return {...x, followed: true };
                            }
                            return x;
                        })
                    }
                }
            });
            return { ...state }
        case UNFOLLOW:
            Axios
            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${action.userId}`, {
                withCredentials: true
                // ,headers: {  "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3" }
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    return {
                        ...state,
                        users: state.users.map(x => {
                            if (x.id === action.userId) {
                                return {...x, followed: false };
                            }
                            return x;
                        })
                    }
                }
            });
            return { ...state }
        case SET_USERS:
            return { ...state, users: action.users } //merge of 2 arrays
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT: 
            return { ...state, totalUsersCount: action.count }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
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
