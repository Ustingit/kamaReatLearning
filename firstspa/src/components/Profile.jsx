import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return(
        <div className="content">
      <div><img className='content-main-image' src='https://www.canon.ru/media/EOS_5D_Mark_IV_CINC%20_sample-image2_1920x520_hero_tcm203-1374061.jpg'></img></div>
      <div>
        ava + post
        <div><img src='https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'></img></div>
        
        </div>
      <div>My post</div>
      <div>New post</div>

      <div className="posts">Posts:
          <div className="item">Post 1</div>
          <div className="item">Post 2</div>
          <div className="item">Post 3</div>
          <div className="item">Post 4</div>
      </div>
    </div>
    )
}

export default Profile;