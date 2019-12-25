import React from 'react';
import css from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {
    const userItems = props.dialogsPage.usersData.map(x => <DialogItem name={x.name} key={x.id} id={x.id} />);
    const messagesItems = props.dialogsPage.messagesData.map(x => <Message text={x.text} key={x.id} />);

    let onMessageTextChange = (event) => {
        let value = event.target.value;
        props.setNewMsgText(value);
    }

    let onSendMessage = () => {
        props.sendMsg();
    }
    
    if(!props.isAuth) { return <Redirect to={'/login'} /> }

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
                            value= {props.dialogsPage.newMessageBody}
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