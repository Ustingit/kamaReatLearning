import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile' render={() => <Profile posts={props.postsRawData} />} />
          <Route path='/dialogs' render={() => <Dialogs usersData={props.usersData} messagesData={props.messagesData} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
