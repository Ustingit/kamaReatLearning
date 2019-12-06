import React from 'react';
import css from './Post.module.css';

const Post = (props) => {

    return (
        <div className={css.item}>
            <img alt='asd' src='https://components4developers.blog/wp-content/uploads/2018/07/Post_Danmark_Post_boxes_in_F%C3%A5borg_Denmark.jpg'></img>
            <br />{props.text}
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;