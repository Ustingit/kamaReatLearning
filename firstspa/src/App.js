import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import ProfileComponent from './components/Profile/ProfileComponent';
import { withSuspence } from './hoc/withSuspence';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert(promiseRejectionEvent);
  }

  componentDidMount() {
    // действие происходит когда данная компонента "вмонтирована"
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
              <Switch>
                <Route exact path='/' render={() => <Redirect to={'/profile'} />} />
                <Route path='/profile/:userId?' render={() => <ProfileComponent />} />
                <Route path='/dialogs' render={withSuspence(DialogsContainer)} />
                <Route path='/users' render={withSuspence(UsersContainer)} />
                <Route path='/login' render={() => <Login />} />
                <Route path='*' render={() => <div>404 NOT FOUND</div>} />
              </Switch>
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
