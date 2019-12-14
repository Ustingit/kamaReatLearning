import React from 'react';
import { sendMessage, setNewMessageText } from './../../redux/dialogsReducers';
import Dialogs from './Dialogs';
import storeContext from '../../StoreContext';

const DialogsContainer = (props) => {
    return (<storeContext.Consumer>
        {
            (store) => {
                let state = store.getState();
                let messageBody = state.dialogsPage.newMessageBody;

                let setNewMsgText = (text) => {
                    store.dispatch(setNewMessageText(text));
                }

                let sendMsg = () => {
                    store.dispatch(sendMessage());
                }
                return (<Dialogs setNewMsgText={setNewMsgText}
                    sendMsg={sendMsg}
                    messageBody={messageBody}
                    users={state.dialogsPage.usersData}
                    messages={state.dialogsPage.messagesData} />)
            }
        }
    </storeContext.Consumer>)
}

export default DialogsContainer;