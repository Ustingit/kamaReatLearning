import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsItems = props.posts.map(x => <Post text={x.text} likesCount={x.likesCount} />);

  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text)
  }

  return (
    <div className={css.postsBlock}><h3>My posts</h3>
      <div>New post</div>
      <div>
        <div><textarea ref={newPostElement}></textarea></div>
        <button onClick={ addPost }>Add post</button>
      </div>
      <div className={css.posts}>Posts:
          {postsItems}
      </div>
    </div>
  )
}

export default MyPosts;