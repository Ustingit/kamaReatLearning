import { sendMessage } from './../../redux/dialogsReducers';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: (newMessage) => {
            dispatch(sendMessage(newMessage))
        }
    }
}

//roughly speaking "connect" returns HOC too, and withRoute is HOC, etc. It's just wrappers
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)