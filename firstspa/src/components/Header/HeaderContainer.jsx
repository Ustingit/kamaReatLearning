import React from 'react';
import Header from './Header';
import Axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        // действие происходит когда данная компонента "вмонтирована"
        let params = { "email": "free@samuraijs.com", "password": "free", "rememberMe": true }

        Axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, params);
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data.id,
                        response.data.data.email,
                        response.data.data.login);
                    debugger
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);