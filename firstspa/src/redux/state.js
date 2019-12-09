const ADD_POST = "ADD-POST";
const SET_TEXT_FOR_NEW_POST = "SET-POST-TEXT";
const SET_NEW_MESSAGE_TEXT = "SET-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
    _state: {
        dialogsPage: {
            usersData: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Sveta' },
                { id: 3, name: 'Katya' },
                { id: 4, name: 'Kolya' },
                { id: 5, name: 'Valera' }
            ],
            messagesData: [
                { id: 1, text: 'Hi!' },
                { id: 2, text: 'How are you ?' },
                { id: 3, text: 'Yo!' },
                { id: 4, text: 'Kolya' },
                { id: 5, text: 'Valera' }
            ],
            newMessageBody: ''
        },
        profilePage: {
            postsRawData: [
                { id: 1, text: 'Post 1', likesCount: '1' },
                { id: 2, text: 'Post 2', likesCount: '231' },
                { id: 3, text: 'Post 3', likesCount: '547' },
                { id: 4, text: 'Post 4', likesCount: '14' },
                { id: 5, text: 'Post 5', likesCount: '1' },
                { id: 6, text: 'Post 6', likesCount: '8' }],
            newPostText: "Введите текст поста"
        },
        sitebar: {}
    },
    getState() { return this._state; },
    _callSubscriber() {
        console.log('currently there are no any subscribers');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = { id: 7, text: this._state.profilePage.newPostText, likesCount: 0 };

            this._state.profilePage.postsRawData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this);
        }
        else if (action.type === SET_TEXT_FOR_NEW_POST) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this);
        }
        else if (action.type === SET_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageBody = action.newMessageText;
            this._callSubscriber(this);
        }
        else if (action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push({
                id: 7,
                text: body
            });
            this._callSubscriber(this);
        }
    }
}

export let sendMessage = () => ({ type: SEND_MESSAGE });

export let setNewMessageText = (text) => {
    return {
        type: SET_NEW_MESSAGE_TEXT,
        newMessageText: text
    }
}

export let addPostActionCreator = () => ({ type: ADD_POST });

export let updateNewPostActionCreator = (text) => {
    return {
        type: SET_TEXT_FOR_NEW_POST,
        newPostText: text
    };
}

export default store;
window.store = store;