const ADD_POST = "ADD-POST";
const SET_TEXT_FOR_NEW_POST = "SET-POST-TEXT";

let initialState = {
    postsRawData: [
        { id: 1, text: 'Post 1', likesCount: '1' },
        { id: 2, text: 'Post 2', likesCount: '231' },
        { id: 3, text: 'Post 3', likesCount: '547' },
        { id: 4, text: 'Post 4', likesCount: '14' },
        { id: 5, text: 'Post 5', likesCount: '1' },
        { id: 6, text: 'Post 6', likesCount: '8' }],
    newPostText: "Введите текст поста"
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = { id: 7, text: state.newPostText, likesCount: 0 };

            let stateCopy = {...state};
            stateCopy.postsRawData = [...state.postsRawData];

            stateCopy.postsRawData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case SET_TEXT_FOR_NEW_POST: {
            let stateCopy = {...state};  //spread operator
            stateCopy.postsRawData = [...state.postsRawData];
            stateCopy.newPostText = {...state.newPostText};

            stateCopy.newPostText = action.newPostText;
            return stateCopy;
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
