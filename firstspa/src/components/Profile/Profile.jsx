import React from 'react';
import css from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  debugger
  return (
    <div className={css.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;