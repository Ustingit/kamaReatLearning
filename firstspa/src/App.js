import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileComponent from './components/Profile/ProfileComponent';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, withRouter } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends Component {
  componentDidMount() {
    // действие происходит когда данная компонента "вмонтирована"
    this.props.initializeApp();
  }

  render () {
    if (!this.props.isInitialized) {
        return <Preloader />
    } else {
        return (
          <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
              <Route path='/profile/:userId?' render={() => <ProfileComponent />} />
              <Route path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/login' render={() => <Login />} />
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized
})

export default compose(
  withRouter, connect(mapStateToProps, { initializeApp }))(App);
