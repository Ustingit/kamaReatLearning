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
