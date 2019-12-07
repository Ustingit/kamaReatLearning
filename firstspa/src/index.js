import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsRawData = [
    { id: 1, text: 'Post 1', likesCount: '1' },
    { id: 2, text: 'Post 2', likesCount: '231' },
    { id: 3, text: 'Post 3', likesCount: '547' },
    { id: 4, text: 'Post 4', likesCount: '14' },
    { id: 5, text: 'Post 5', likesCount: '1' },
    { id: 6, text: 'Post 6', likesCount: '8' }
  ];

  let usersData = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Sveta' },
    { id: 3, name: 'Katya' },
    { id: 4, name: 'Kolya' },
    { id: 5, name: 'Valera' }
];

let messagesData = [
    { id: 1, text: 'Hi!' },
    { id: 2, text: 'How are you ?' },
    { id: 3, text: 'Yo!' },
    { id: 4, text: 'Kolya' },
    { id: 5, text: 'Valera' }
];

ReactDOM.render(<App postsRawData={postsRawData} messagesData={messagesData} usersData={usersData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
