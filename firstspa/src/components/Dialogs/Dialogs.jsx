import React from 'react';
import css from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={css.dialog + ' ' + css.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={css.message}>{props.text}</div>
    )
}

const Dialogs = (props) => {

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

    const userItems = []
    
    for (const [key, value] of usersData.entries()) {
        userItems.push(<DialogItem name={value.name} id={value.id} />)
    }
    
    const messagesItems = [];
    for (const [key, value] of messagesData.entries()) {
        messagesItems.push(<Message text={value.text} />)
    }

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