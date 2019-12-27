import React from 'react';

class ProfileStatus extends React.Component {
    state ={
        editMode: false
    }

    //arrow function saves context, but default 'class' functions do not
    activateEditMode() {
        this.setState({ editMode: true })
    }
    deactivateEditMode() {
        this.setState({ editMode: false })
    }

    render() {
        return(
            <>
                { !this.state.editMode && 
                    <div>
                        <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</span>
                    </div>
                }
                { this.state.editMode &&
                    <div>
                        {/* blur triggers by UNfocusing this elements */}
                        <input onBlur={ this.deactivateEditMode.bind(this) } value={this.props.status} />
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus