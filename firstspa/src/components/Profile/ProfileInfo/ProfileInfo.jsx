import React, { useState } from 'react';
import css from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, ...props}) => {
    let [editMode, setEditMode] = useState(false);

    if(!profile){
        return <Preloader />
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
    }

    return (
        <div>
            <div className={css.descriptionBlock}>
                <div>
                    <img className={css.avatar} 
                    alt='avatar' 
                    src={ profile.photos.small }>
                    </img>
                    
                    {editMode 
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={ () => {setEditMode(true)} } />}

                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    isOwner = true;

    return <div>
                { isOwner && <div><button onClick={goToEditMode} >edit</button></div> }
                <div><b>Full name:</b> {profile.fullName}</div>
                <div>
                    <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
                </div>
                {profile.lookingForAJob && 
                    <div><b>My skills:</b> {profile.lookingForAJobDescription}</div> 
                }
                <div>
                    <b>Contacts</b> {Object.keys(profile.contacts).map(key => {
                    return <Contact contactTitle={key} contactValue={profile.contacts[key]} />
                    })}
                </div>
            </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={css.contact}><b>{contactTitle}: </b>{contactValue}</div>
}

export default ProfileInfo;