const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState = {
    users: [ ],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1
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
        default:
            return state;
    }
}

export let followAC = (userId) => ({ type: FOLLOW, userId }); // AC - action creator
export let unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export let setUsersAC = (users) => ({ type: SET_USERS, users: users });
export let setCurPageAC = (page) => ({ type: SET_CURRENT_PAGE, currentPage: page });
export let setTotalUsersCountAC = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalCount });
