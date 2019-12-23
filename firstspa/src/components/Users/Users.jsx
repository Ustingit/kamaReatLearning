import React from 'react';
import css from './Users.module.css';
import image from './../../assets/images/avaDefault2.png';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>

        {pages.map(x =>
          <span key={x.id} onClick={() => { props.onPageChanged(x) }}
            className={(props.currentPage === x) && css.selectedPage}>{x}</span>
        )}

      </div>
      {props.users.map(x =>

        <div key={x.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + x.id}><img className={css.userPhoto}
                alt='avatar'
                src={x.photos.small ? x.photos.small : image}></img>
              </NavLink>
            </div>
            <div>
              {x.followed
                ? <button disabled={props.followingInProgress.some(id => id === x.id)} 
                onClick={() => {
                  props.setIsFollowing(true, x.id);
                  Axios
                    .delete(`https://social-network.samuraijs.com/api/1.0/follow/${x.id}`, {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "1b95658b-9031-4f4e-a216-a8df40226f99"
                      }
                    })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(x.id);
                      }
                      props.setIsFollowing(false, x.id);
                    })
                }}>Unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === x.id)} 
                onClick={() => {
                  props.setIsFollowing(true, x.id);
                  Axios
                    .post(`https://social-network.samuraijs.com/api/1.0/follow/${x.id}`, {}, {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "1b95658b-9031-4f4e-a216-a8df40226f99"
                      }
                    })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(x.id);
                      }
                      props.setIsFollowing(false, x.id);
                    })
                  
                }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{x.name}</div><div>{x.status}</div>
            </span>
            <span>
              <div>x.location.country</div>
              <div>x.location.city</div>
            </span>
          </span>

        </div>)}
    </div>
  )
}

export default Users;