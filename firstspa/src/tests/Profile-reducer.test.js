import { profileReducer, addPostActionCreator, deletePost } from '../redux/profileReducer';

it ("posts count should be incremented", () => {
    let action = addPostActionCreator("test text");
    let state = {
        postsRawData: [
            { id: 1, text: 'Post 1', likesCount: '1' },
            { id: 2, text: 'Post 2', likesCount: '231' },
            { id: 3, text: 'Post 3', likesCount: '547' }
        ]
    }

    let newState = profileReducer(state, action);
    
    expect(newState.postsRawData.length).toBe(4);
})

it ("posts text should be added", () => {
    let action = addPostActionCreator("test text");
    let state = {
        postsRawData: [
            { id: 1, text: 'Post 1', likesCount: '1' },
            { id: 2, text: 'Post 2', likesCount: '231' },
            { id: 3, text: 'Post 3', likesCount: '547' }
        ]
    }

    let newState = profileReducer(state, action);
    
    expect(newState.postsRawData[3].text).toBe("test text");
})

it ("after deleting posts count should be decremented", () => {
    let action = deletePost(1);
    let state = {
        postsRawData: [
            { id: 1, text: 'Post 1', likesCount: '1' },
            { id: 2, text: 'Post 2', likesCount: '231' },
            { id: 3, text: 'Post 3', likesCount: '547' }
        ]
    }

    let newState = profileReducer(state, action);
    
    expect(newState.postsRawData.length).toBe(2);
})

