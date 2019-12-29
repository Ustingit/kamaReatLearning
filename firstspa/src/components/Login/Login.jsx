import React from 'react';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} placeholder={'Login'} name={'login'} />
            </div>
            <div>
                <Field component={'input'} placeholder={'Password'} name={'password'} />
            </div>
            <div>
                <Field component={'input'}  type={'checkbox'} name={'rememberMe'} />remember me
            </div>
            <div>
                <button>
                    login
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