import loader from '../../../assets/images/loader.gif';
import React from 'react';

let Preloader = (props) => {
    return (
        <div><img alt="preloader-gif" src={loader}></img></div>
    )
}

export default Preloader;