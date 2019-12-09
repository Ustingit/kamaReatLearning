import React from 'react';
import css from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { sendMessage, setNewMessageText } from './../../redux/dialogsReducers';

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    const userItems = state.usersData.map(x => <DialogItem name={x.name} id={x.id} />);
    const messagesItems = state.messagesData.map(x => <Message text={x.text} />);
    let newMsgBody = state.newMessageBody;

    let setNewMsgText = (event) => {
        let value = event.target.value;
        props.store.dispatch(setNewMessageText(value));
    }

    let sendMsgOnClick = () => {
        props.store.dispatch(sendMessage());
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {userItems}
            </div>
            <div className={css.messages}>
                {messagesItems}
                <div>
                    <div><p>---------------------</p>New message:</div>
                    <div>
                        <textarea placeholder="enter your message here."
                            value={newMsgBody}
                            onChange={setNewMsgText}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={sendMsgOnClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;