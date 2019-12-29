import React from 'react';
import css from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormControls/FormControls';
import { requiredField, maxLengthCreator } from '../../utils/validators/Validators';

const maxPostLength250 = maxLengthCreator(250);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            <Field component={Textarea} 
            validate={[requiredField, maxPostLength250]}
            name='newMessageBody' 
            placeholder="enter your message here." />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    // a unique name for the form
    form: 'dialogAddMessageForm'
  })(AddMessageForm)

const Dialogs = (props) => {
    const userItems = props.dialogsPage.usersData.map(x => <DialogItem name={x.name} key={x.id} id={x.id} />);
    const messagesItems = props.dialogsPage.messagesData.map(x => <Message text={x.text} key={x.id} />);

    let addNewMessage = (values) => {
        props.sendMsg(values.newMessageBody);
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {userItems}
            </div>
            <div className={css.messages}>
                {messagesItems}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs;