import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormControls/FormControls';
import { requiredField } from '../../utils/validators/Validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import css from './../common/FormControls/FormControls.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input} validate={[requiredField]} placeholder={'Email'} name={'email'} />
            </div>
            <div>
                <Field type='password' component={Input} validate={[requiredField]} placeholder={'Password'} name={'password'} />
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={'rememberMe'} />remember me
            </div>

            { captchaUrl && <img src={captchaUrl} alt="captcha" /> }
            { captchaUrl && 
                <div>
                    <Field component={Input} validate={[requiredField]} placeholder={'Symbols from image'} name={'captcha'} />
                </div>
            }

            { error && <div className={css.formSummaryError}>
                { error }
            </div> }
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
            formData.rememberMe,
            formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxFrom onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuthenticated, 
    captchaUrl: state.auth.captchaUrl })

export default connect(mapStateToProps, { login })(Login)