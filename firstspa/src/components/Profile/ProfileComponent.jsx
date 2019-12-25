import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer'; 
import { withRouter, Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
    this.props.getUserProfile(userId);
  }
  
  render() {
    if (!this.props.isAuth) { return <Redirect to={'/login'} /> }
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuthenticated
  }
}

let profileContainerWithRouter = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getUserProfile })(profileContainerWithRouter);