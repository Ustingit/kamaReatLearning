import React from 'react';
import { sendMessage, setNewMessageText } from './../../redux/dialogsReducers';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState();
    let messageBody = state.dialogsPage.newMessageBody;

    let setNewMsgText = (text) => {
        props.store.dispatch(setNewMessageText(text));
    }

    let sendMsg = () => {
        props.store.dispatch(sendMessage());
    }

    return (<Dialogs setNewMsgText={setNewMsgText}
        sendMsg={sendMsg}
        messageBody={messageBody}
        users={state.dialogsPage.usersData}
        messages={state.dialogsPage.messagesData} />)
}

export default DialogsContainer;