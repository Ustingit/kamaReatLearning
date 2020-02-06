import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);  //in array - dependencies

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return(
        <>
            { !editMode && 
                <div>
                    <b>Status: </b>
                    <span onDoubleClick={ activateEditMode }>{props.status || "введите статус!"}</span>
                </div>
            }
            { editMode &&
                <div>
                    {/* blur triggers by UNfocusing this elements */}
                    <input onChange={ onStatusChange } 
                           autoFocus={true} 
                           onBlur={ deactivateEditMode } 
                           value={ status } />
                </div>
            }
        </>
    )
} 
        
export default ProfileStatusWithHooks