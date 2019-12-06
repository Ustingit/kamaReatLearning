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
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
      </div>
      </div>
    )
}

export default MyPosts;