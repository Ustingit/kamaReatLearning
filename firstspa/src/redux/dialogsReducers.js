const SET_NEW_MESSAGE_TEXT = "SET-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageBody: action.newMessageText
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            let newMessage = {
                id: state.messagesData[state.messagesData.length - 1].id + 1,
                text: body
            };
            return {
                ...state,
                newMessageBody: "",
                messagesData: [...state.messagesData, newMessage]
            };
        }
        default:
            return state;
    }
}

export let sendMessage = () => ({ type: SEND_MESSAGE });

export let setNewMessageText = (text) => {
    return {
        type: SET_NEW_MESSAGE_TEXT,
        newMessageText: text
    }
}