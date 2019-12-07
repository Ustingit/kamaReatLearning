import React from 'react';
import css from './Navbar.module.css';

const Navbar = () => {
    return(
        <nav className={css.nav}>
        <div className={css.item}><a href='/profile'>Profile</a></div>
        <div className={css.item}><a href='/dialogs'>Messages</a></div>
        <div className={css.item}><a href='profile'>News</a></div>
        <div className={css.item}><a href='profile'>Music</a></div>
        <div className={css.item}><a href='profile'>Settings</a></div>
      </nav>
    )
}

export default Navbar;