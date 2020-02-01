import React from 'react';
import User from './User';
import Paginator from '../common/Paginator/Paginator';

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <Paginator onPageChanged={onPageChanged} currentPage={currentPage}
                   pageSize={pageSize} totalUsersCount={totalUsersCount} />
      <div>
      {props.users.map(x => <User user={x} 
                                  followingInProgress={props.followingInProgress}
                                  unfollow={props.unfollow}
                                  follow={props.follow} />)}
      </div>
    </div>
  )
}

export default Users;