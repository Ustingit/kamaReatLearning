import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormControls/FormControls';
import { requiredField } from '../../utils/validators/Validators';

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[requiredField]} placeholder={'Login'} name={'login'} />
            </div>
            <div>
                <Field component={Input} validate={[requiredField]} placeholder={'Password'} name={'password'} />
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={'rememberMe'} />remember me
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
        </form>
}

const LoginReduxFrom = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxFrom onSubmit={onSubmit} />
    </div>
}

export default Login