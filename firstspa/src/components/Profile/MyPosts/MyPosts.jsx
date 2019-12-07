import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={css.postsBlock}><h3>My posts</h3>
      <div>New post</div>
      <div>
        <div><textarea></textarea></div>
        <button>Add post</button>
      </div>
      <div className={css.posts}>Posts:
          <Post text='Post 1' likesCount='1' />
        <Post text='Post 2' likesCount='231' />
        <Post text='Post 3' likesCount='12' />
        <Post text='Post 4' likesCount='16' />
        <Post text='Post 5' likesCount='1' />
        <Post text='Post 6' likesCount='7' />
      </div>
    </div>
  )
}

export default MyPosts;