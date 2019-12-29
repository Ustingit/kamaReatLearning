import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormControls/FormControls';
import { requiredField } from '../../utils/validators/Validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[requiredField]} placeholder={'Email'} name={'email'} />
            </div>
            <div>
                <Field type='password' component={Input} validate={[requiredField]} placeholder={'Password'} name={'password'} />
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={'rememberMe'} />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
}

const LoginReduxFrom = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, //name in "name" propperty of the "Field" above
            formData.password,
            formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxFrom onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuthenticated })

export default connect(mapStateToProps, { login })(Login)