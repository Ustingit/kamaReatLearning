import React from 'react';
import css from './Users.module.css';
import image from './../../assets/images/avaDefault2.png';
import { NavLink } from 'react-router-dom';

let User = ({user, followingInProgress, unfollow, follow}) => {
  return (
    <div key={user.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img className={css.userPhoto}
                alt='avatar'
                src={user.photos.small ? user.photos.small : image}></img>
              </NavLink>
            </div>
            <div>
              {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)} 
                onClick={() => { unfollow(user.id) }}>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)} 
                onClick={() => { follow(user.id) }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div><div>{user.status}</div>
            </span>
            <span>
              <div>x.location.country</div>
              <div>x.location.city</div>
            </span>
          </span>
        </div>
    )
}

export default User;