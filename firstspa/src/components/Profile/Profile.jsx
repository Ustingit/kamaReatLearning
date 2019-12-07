import React from 'react';
import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  debugger;
  return (
    <div className={css.content}>
      <ProfileInfo />
      <MyPosts posts={props.state.postsRawData} />
    </div>
  )
}

export default Profile;