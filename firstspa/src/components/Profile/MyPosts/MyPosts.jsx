import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsRawData = [
    { id: 1, text: 'Post 1', likesCount: '1' },
    { id: 2, text: 'Post 2', likesCount: '231' },
    { id: 3, text: 'Post 3', likesCount: '547' },
    { id: 4, text: 'Post 4', likesCount: '14' },
    { id: 5, text: 'Post 5', likesCount: '1' },
    { id: 6, text: 'Post 6', likesCount: '8' }
  ];

  const postsItems = []
  for (const [key, value] of postsRawData.entries()) {
    postsItems.push(<Post text={value.text} likesCount={value.likesCount} />)
  }

  return (
    <div className={css.postsBlock}><h3>My posts</h3>
      <div>New post</div>
      <div>
        <div><textarea></textarea></div>
        <button>Add post</button>
      </div>
      <div className={css.posts}>Posts:
          {postsItems}
      </div>
    </div>
  )
}

export default MyPosts;