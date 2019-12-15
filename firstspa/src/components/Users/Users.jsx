import React from 'react';
import css from './Users.module.css';
import Axios from 'axios';
import image from './../../assets/images/avaDefault2.png';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.getUsers();
  }

  getUsers = () => {
    if (this.props.users.length === 0) {
      Axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        this.props.setUsers(response.data.items);
      });
    }
  }

  render() {
    return (
      <div>
        { this.props.users.map(x =>

          <div key={x.id}>
            <span>
              <div>
                <img className={css.userPhoto}
                  alt='avatar'
                  src={x.photos.small ? x.photos.small : image}></img>
              </div>
              <div>
                {x.followed
                  ? <button onClick={() => { this.props.unfollow(x.id) }}>Unfollow</button>
                  : <button onClick={() => { this.props.follow(x.id) }}>Follow</button>}
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
}

export default Users;