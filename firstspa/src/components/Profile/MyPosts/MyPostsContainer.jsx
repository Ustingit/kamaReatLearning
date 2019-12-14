import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from './../../../redux/profileReducer';
import MyPosts from './MyPosts';
import storeContext from '../../../StoreContext';


const MyPostsContainer = (props) => {
        return (
        <storeContext.Consumer> 
            {
                (store) => {
                    let state = store.getState();

                    let addNewPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let updatePostText = (text) => {
                        store.dispatch(updateNewPostActionCreator(text));
                    }

                    return (<MyPosts updatePostText={updatePostText}
                    addNewPost={addNewPost}
                    posts={state.profilePage.postsRawData}
                    newPostText={state.profilePage.newPostText} />)
                }
            }
        </storeContext.Consumer>)
}

export default MyPostsContainer;