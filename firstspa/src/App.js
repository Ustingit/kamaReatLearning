import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">

      <header className="header">
        <img alt='' src='https://i-love-png.com/images/yoga-logo-png-25.png' />
      </header>

      <nav className="nav">
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      
    <div className="content">
      <div><img className='content-main-image' src='https://www.canon.ru/media/EOS_5D_Mark_IV_CINC%20_sample-image2_1920x520_hero_tcm203-1374061.jpg'></img></div>
      <div>
        ava + post
        <div><img src='https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'></img></div>
        
        </div>
      <div>My post</div>
      <div>New post</div>
      <div>Posts:
          <div>Post 1</div>
          <div>Post 2</div>
          <div>Post 3</div>
          <div>Post 4</div>
      </div>
    </div>

    </div>
  );
}

export default App;
