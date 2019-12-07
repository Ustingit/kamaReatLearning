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
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <DialogItem name="Dima" id="1" />
                <DialogItem name="Sveta" id="2" />
                <DialogItem name="Katya" id="3" />
                <DialogItem name="Kolya" id="4" />
                <DialogItem name="Valera" id="5" />
            </div>
            <div className={css.messages}>
                <Message text='Hi!' />
                <Message text='How are you ?' />
                <Message text='Yo!' />
            </div>
        </div>
    )
}

export default Dialogs;