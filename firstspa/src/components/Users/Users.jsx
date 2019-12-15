import React from 'react';
import css from './Users.module.css';

const Users = (props) => {
  if(props.users.length === 0){
    props.setUsers([
      {
        id: 1, photoUrl: 'https://www.bemanistyle.com/wp-content/uploads/2018/01/Linux-Avatar-300px.png',
        isFollowed: false, fullName: 'Dmitriy L.', status: 'I\'m a boss',
        location: { city: 'Minsk', country: 'Belarus' }
      },
      {
        id: 2, photoUrl: 'https://www.bemanistyle.com/wp-content/uploads/2018/01/Linux-Avatar-300px.png',
        isFollowed: false, fullName: 'Kostya Z.', status: 'I\'m a boss too',
        location: { city: 'Kiev', country: 'Ukraine' }
      },
      {
        id: 3, photoUrl: 'https://www.bemanistyle.com/wp-content/uploads/2018/01/Linux-Avatar-300px.png',
        isFollowed: true, fullName: 'Olga A.', status: 'sad but true..',
        location: { city: 'Barcelona', country: 'Spain' }
      }
    ])
  }

  return (
    <div>
      {props.users.map(x =>

        <div key={x.id}>
          <span>
            <div>
              <img className={css.userPhoto} alt='avatar' src={x.photoUrl}></img>
            </div>
            <div>
              {x.isFollowed
                ? <button onClick={() => { props.unfollow(x.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(x.id) }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{x.fullName}</div><div>{x.status}</div>
            </span>
            <span>
              <div>{x.location.country}</div>
              <div>{x.location.city}</div>
            </span>
          </span>

        </div>)}
    </div>
  )
}

export default Users;