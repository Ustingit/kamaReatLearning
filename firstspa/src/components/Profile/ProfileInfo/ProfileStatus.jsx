import React from 'react';

class ProfileStatus extends React.Component {
    state ={
        editMode: false,
        status: this.props.status
    }

    //arrow function saves context, but default 'class' functions do not
    activateEditMode = () => {
        this.setState({ editMode: true })
    }
    deactivateEditMode = () => {
        this.setState({ editMode: false })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){  //in did update really imp to set some conditions for action, in other cases hish risk of stackoverflow
            this.setState({ status: this.props.status })  //state synchronization
        }
    }

    render() {
        return(
            <>
                { !this.state.editMode && 
                    <div>
                        <span onDoubleClick={ this.activateEditMode }>{this.props.status || "введите статус!"}</span>
                    </div>
                }
                { this.state.editMode &&
                    <div>
                        {/* blur triggers by UNfocusing this elements */}
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status} />
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus