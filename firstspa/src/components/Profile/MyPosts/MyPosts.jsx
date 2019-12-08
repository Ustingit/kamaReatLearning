import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsItems = props.posts.map(x => <Post text={x.text} likesCount={x.likesCount} />);

  let newPostElement = React.createRef();
  let addNewPost = () => {
    let action = {
      type: "ADD-POST"
    };
    props.dispatch(action);
  }

  let onPostChange = () => {
      let text = newPostElement.current.value;
      let action = {
        type: "SET-POST-TEXT",
        newPostText: text
      };
      props.dispatch(action);
  }

  return (
    <div className={css.postsBlock}><h3>My posts</h3>
      <div>New post</div>
      <div>
        <div>
          <textarea
          ref={newPostElement} 
          onChange={onPostChange} 
          value={props.newPostText}>
          </textarea>
        </div>
        <button onClick={ addNewPost }>Add post</button>
      </div>
      <div className={css.posts}>Posts:
          {postsItems}
      </div>
    </div>
  )
}

export default MyPosts;