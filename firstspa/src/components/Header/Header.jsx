import React from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <header className={css.header}>
        <img alt='' src='https://i-love-png.com/images/yoga-logo-png-25.png' />

        <div className={css.loginBlock}>
          { props.isAuthenticated 
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>  
          : <NavLink to={'/login'}>Login</NavLink> }
        </div>
      </header>
    )
}

export default Header