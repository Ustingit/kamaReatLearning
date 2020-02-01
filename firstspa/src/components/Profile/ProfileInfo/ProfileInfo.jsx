import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus, ...props}) => {
    if(!profile){
        return <Preloader />
    }

    return (
        <div>
            <div className={css.descriptionBlock}>
                <div>
                    <img className={css.avatar} 
                    alt='avatar' 
                    src={ profile.photos.small }>
                    </img>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;