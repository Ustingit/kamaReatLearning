import React from 'react';
import css from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <div className={css.dialog + ' ' + css.active}>
                    <NavLink to='/dialogs/1'>Dima</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/2'>Sveta</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/3'>Katya</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/4'>Kolya</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/5'>Valera</NavLink>
                </div>
            </div>
            <div className={css.messages}>
                <div className={css.message}>Hi!</div>
                <div className={css.message}>How are you ?</div>
                <div className={css.message}>Yo!</div>
            </div>
        </div>
    )
}

export default Dialogs;