import React from 'react';
import css from './Users.module.css';
import Axios from 'axios';
import image from './../../assets/images/avaDefault2.png';

class Users extends React.Component {
  componentDidMount() {
    Axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setItemsCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    Axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>

          {pages.map(x =>
            <span onClick={ () => { this.onPageChanged(x) } }
              className={(this.props.currentPage === x) && css.selectedPage}>{x}</span>
          )}

        </div>
        {this.props.users.map(x =>

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