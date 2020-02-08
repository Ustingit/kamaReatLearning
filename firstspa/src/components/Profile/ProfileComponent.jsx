import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, saveProfile, savePhoto } from '../../redux/profileReducer'; 
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    refreshProfile(){
      let userId = this.props.match.params.userId;
      if(!userId) {
          userId = 5509; //TODO: instead of this here has to be "authorizedUserId" - check!!
          if(!userId) {
            this.props.history.push("/login");
          }
      }
  
      this.props.getUserProfile(userId);
      this.props.getUserStatus(userId);
    }

  componentDidMount() {
      this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot){
      if (prevProps.match.params.userId !== this.props.match.params.userId) {
        this.refreshProfile();
      }
  }
  
  render() {
    // !! in isOwner property makes bool from pseudo-truth (an object compating with bool)
    return <Profile {...this.props} 
                    profile={this.props.profile} 
                    status={this.props.status} 
                    savePhoto={this.props.savePhoto}
                    isOwner={ this.props.match.params.userId === undefined || this.props.match.params.userId === 5509 }
                    updateStatus={this.props.updateUserStatus} />
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuthenticated
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, saveProfile, savePhoto }),
  withRouter,
  //withAuthRedirect
)(ProfileContainer)