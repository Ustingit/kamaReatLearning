import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return(
        <div>My posts
      <div>New post</div>
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
      <div className={css.posts}>Posts:
          <Post text='Post 1' />
          <Post text='Post 2' />
          <Post text='Post 3' />
          <Post text='Post 4' />
          <Post text='Post 5' />
          <Post text='Post 6' />
      </div>
      </div>
    )
}

export default MyPosts;