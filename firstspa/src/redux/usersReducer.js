const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [ ]
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
            return { ...state, users: [...state.users, ...action.users] } //merge of 2 arrays
        default:
            return state;
    }
}

export let followAC = (userId) => ({ type: FOLLOW, userId }); // AC - action creator
export let unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export let setUsersAC = (users) => ({ type: SET_USERS, users: users });
