import React from 'react';
import css from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    const userItems = props.users.map(x => <DialogItem name={x.name} id={x.id} />);
    const messagesItems = props.messages.map(x => <Message text={x.text} />);

    let onMessageTextChange = (event) => {
        let value = event.target.value;
        props.setNewMsgText(value);
    }

    let onSendMessage = () => {
        props.sendMsg();
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
                            value= {props.messageBody }
                            onChange={ onMessageTextChange }>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessage }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;