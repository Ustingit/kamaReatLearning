import { connect } from 'react-redux';
import { follow, unfollow, 
    setUsers, setCurrentPage, 
    setItemsCount, setIsFetching,
    setIsFollowing } from './../../redux/usersReducer';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { userAPI } from '../../api/api';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setItemsCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
            });
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
            setIsFollowing={this.props.setIsFollowing}
            followingInProgress={this.props.followingInProgress} />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setItemsCount: setItemsCount,
    setIsFetching,
    setIsFollowing
})(UsersContainer);