import React from 'react';
import css from './Profile.module.css';

const Profile = () => {
    return(
        <div className={css.content}>
      <div><img className={css.content_main_image} alt="" src='https://www.canon.ru/media/EOS_5D_Mark_IV_CINC%20_sample-image2_1920x520_hero_tcm203-1374061.jpg'></img></div>
      <div>
        ava + post
        <div><img className={css.avatar} alt='avatar' src='https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'></img></div>
        
        </div>
      <div>My post</div>
      <div>New post</div>

      <div className={css.posts}>Posts:
          <div className={css.item}>Post 1</div>
          <div className={css.item}>Post 2</div>
          <div className={css.item}>Post 3</div>
          <div className={css.item}>Post 4</div>
      </div>
    </div>
    )
}

export default Profile;