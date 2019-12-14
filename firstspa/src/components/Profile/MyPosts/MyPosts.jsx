import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsItems = props.profilePage.postsRawData.map(x => <Post text={x.text} likesCount={x.likesCount} />);

  let addPost = () => {
    props.addNewPost()
  }

  let newPostElement = React.createRef();
  let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updatePostText(text);
  }

  return (
    <div className={css.postsBlock}><h3>My posts</h3>
      <div>New post</div>
      <div>
        <div>
          <textarea
          ref={ newPostElement } 
          onChange={ onPostChange } 
          value={ props.profilePage.newPostText }>
          </textarea>
        </div>
        <button onClick={ addPost }>Add post</button>
      </div>
      <div className={css.posts}>Posts:
          {postsItems}
      </div>
    </div>
  )
}

export default MyPosts;