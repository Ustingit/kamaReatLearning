const ADD_POST = "ADD-POST";
const SET_TEXT_FOR_NEW_POST = "SET-POST-TEXT";

export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = { id: 7, text: state.newPostText, likesCount: 0 };

            state.postsRawData.push(newPost);
            state.newPostText = '';
            return state;
        case SET_TEXT_FOR_NEW_POST:
            state.newPostText = action.newPostText;
            return state;
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
