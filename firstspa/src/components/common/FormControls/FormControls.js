import React from 'react';
import css from './FormControls.module.css';
import {Field} from "redux-form";


export const FormControl = ({ input, meta, child, ...props }) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={css.formControl + ' ' + (hasError && css.error)}>
            <div>{props.children}</div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}


const InternalFormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={css.formControl + " " + (hasError ? css.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const InternalTextarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <InternalFormControl {...props}><textarea {...input} {...restProps} /></InternalFormControl>
}

export const InternalInput = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <InternalFormControl {...props}><input {...input} {...restProps} /></InternalFormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)