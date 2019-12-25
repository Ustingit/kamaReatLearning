import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        // действие происходит когда данная компонента "вмонтирована"
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    login: state.auth.login
})

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);