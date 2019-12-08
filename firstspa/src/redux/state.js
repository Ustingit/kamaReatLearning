let postsRawData = [
    { id: 1, text: 'Post 1', likesCount: '1' },
    { id: 2, text: 'Post 2', likesCount: '231' },
    { id: 3, text: 'Post 3', likesCount: '547' },
    { id: 4, text: 'Post 4', likesCount: '14' },
    { id: 5, text: 'Post 5', likesCount: '1' },
    { id: 6, text: 'Post 6', likesCount: '8' }];

let usersData = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Sveta' },
    { id: 3, name: 'Katya' },
    { id: 4, name: 'Kolya' },
    { id: 5, name: 'Valera' }
];

let messagesData = [
    { id: 1, text: 'Hi!' },
    { id: 2, text: 'How are you ?' },
    { id: 3, text: 'Yo!' },
    { id: 4, text: 'Kolya' },
    { id: 5, text: 'Valera' }
];

let store = {
    _state: {
        dialogsPage: {
            usersData: usersData,
            messagesData: messagesData
        },
        profilePage: {
            postsRawData: postsRawData,
            newPostText: "Введите текст поста"
        },
        sitebar: {}
    },
    getState() { return this._state; },
    _callSubscriber() {
        console.log('currently there are no any subscribers');
    },
    addPost() {
        this._state.profilePage.postsRawData.push(
            {id: 7, text: this._state.profilePage.newPostText, likesCount: 0 }
        );
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    setNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;