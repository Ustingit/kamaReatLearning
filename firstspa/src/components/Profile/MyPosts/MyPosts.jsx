import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../../utils/validators/Validators';
import { Textarea } from '../../common/FormControls/FormControls';

const maxLengthCreator10 = maxLengthCreator(10);

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea} name='newPostText' validate={[requiredField, maxLengthCreator10]} />
        </div>
        <button>Add post</button>
      </form>
  )
}

const NewPostReduxForm = reduxForm({ form: 'profileAddNewPostForm' })(NewPostForm)

const MyPosts = (props) => {
  const postsItems = props.profilePage.postsRawData.map(x => <Post key={x.id} text={x.text} likesCount={x.likesCount} />);

  let onAddPost = (values) => {
    props.addNewPost(values.newPostText)
  }

  return (
    <div className={css.postsBlock}><h3>My posts</h3>
      <div>New post</div>
      <NewPostReduxForm onSubmit={onAddPost} />
      <div className={css.posts}>Posts:
          {postsItems}
      </div>
    </div>
  )
}

export default MyPosts;