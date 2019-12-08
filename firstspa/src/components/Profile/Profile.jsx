import React from 'react';
import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={css.content}>
      <ProfileInfo />
      <MyPosts posts={props.state.postsRawData} 
               addPost={props.addPost} 
               newPostText={props.state.newPostText}
               setNewPostText={props.setNewPostFunction} />
    </div>
  )
}

export default Profile;