import { sendMessage, setNewMessageText } from './../../redux/dialogsReducers';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuthenticated
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setNewMsgText: (text) => {
            dispatch(setNewMessageText(text))
        },
        sendMsg: () => {
            dispatch(sendMessage())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;