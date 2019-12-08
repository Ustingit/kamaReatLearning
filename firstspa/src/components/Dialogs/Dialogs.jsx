import React from 'react';
import css from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    
    const userItems = props.state.usersData.map(x => <DialogItem name={x.name} id={x.id} />);
    const messagesItems = props.state.messagesData.map(x => <Message text={x.text} />);

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {userItems}
            </div>
            <div className={css.messages}>
                {messagesItems}
            </div>
        </div>
    )
}

export default Dialogs;