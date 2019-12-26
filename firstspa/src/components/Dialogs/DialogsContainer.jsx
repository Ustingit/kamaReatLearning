import { sendMessage, setNewMessageText } from './../../redux/dialogsReducers';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let authRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
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

//roughly speaking "connect" is HOC too, and withRoute, etc. It's just wrapper
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);

export default DialogsContainer;