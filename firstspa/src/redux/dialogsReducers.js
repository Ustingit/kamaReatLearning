const SET_NEW_MESSAGE_TEXT = "SET-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SET_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.newMessageText;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({
                id: 7,
                text: body
            });
            return state;
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