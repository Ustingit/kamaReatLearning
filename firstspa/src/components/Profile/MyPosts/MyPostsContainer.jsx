import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from './../../../redux/profileReducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addNewPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updatePostText = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text));
    }

    return (<MyPosts updatePostText={updatePostText}
        addNewPost={addNewPost}
        posts={state.profilePage.postsRawData}
        newPostText={state.profilePage.newPostText} />)
}

export default MyPostsContainer;