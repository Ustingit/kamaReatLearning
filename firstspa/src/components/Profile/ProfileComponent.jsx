import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer'; 
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
    this.props.getUserProfile(userId);
  }
  
  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let authRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

let profileContainerWithRouter = withRouter(authRedirectComponent);
export default connect(mapStateToProps, { getUserProfile })(profileContainerWithRouter);