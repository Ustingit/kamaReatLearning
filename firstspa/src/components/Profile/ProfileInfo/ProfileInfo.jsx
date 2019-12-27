import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }

    return (
        <div>
            <div>
                {/* <img className={css.content_main_image}
                    alt=""
                    src='https://www.canon.ru/media/EOS_5D_Mark_IV_CINC%20_sample-image2_1920x520_hero_tcm203-1374061.jpg'>
                </img> */}
            </div>
            <div className={css.descriptionBlock}>
                ava + post
                <div>
                    <img className={css.avatar} 
                    alt='avatar' 
                    src={ props.profile.photos.small }>
                    </img>
                    <ProfileStatus status={'Hello my friends!'} />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;