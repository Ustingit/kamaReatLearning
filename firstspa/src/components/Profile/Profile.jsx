import React from 'react';
import css from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={css.content}>
      <ProfileInfo profile={props.profile} 
                   status={props.status} 
                   updateStatus={props.updateStatus}
                   saveProfile={props.saveProfile}
                   isOwner={props.isOwner} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;