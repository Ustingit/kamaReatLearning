import { connect } from 'react-redux';
import { follow, unfollow, 
    setCurrentPage,
    setIsFollowing, getUsers  } from './../../redux/usersReducer';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import {compose} from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getPageSize, getTotalUsersCount, getCurrentPage, 
    getIsFetching, getFollowingInProgress, getUsersSelector } 
from '../../redux/selectors/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        return <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            followingInProgress={this.props.followingInProgress} />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow,
        setCurrentPage,
        setIsFollowing, getUsers
    }),
    withAuthRedirect
)(UsersContainer)