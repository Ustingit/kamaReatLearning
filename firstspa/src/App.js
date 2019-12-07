import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">

      <Header />

      <Navbar />

      <div className="app-wrapper-content">
        <Route path='/profile' component={Profile} />
        <Route path='/dialogs' component={Dialogs} />
      </div>

      {/* <Profile /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
