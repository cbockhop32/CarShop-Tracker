import React, { Component } from 'react';

 class CommentsForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: true,
            value: this.props.value
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }


    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addCommentsForm(this.state.value);

        this.setState(st => ({
            isEditing: !st.isEditing
        }))
    }

    handleChange(evt) {
        this.setState({
            value: evt.target.value
        })
    }

    toggleEdit() {
        this.setState(st => ({
            isEditing: !st.isEditing
        }))
    }

    render() {
        let output;

        if(this.state.isEditing) {
            output = (
                <form onSubmit={this.handleSubmit} className="CommentsForm">
                    <h4>Add Comments</h4>
                    <textarea style={{resize: 'none'}} rows='5'  onChange={this.handleChange} defaultValue={this.props.value}></textarea>
                    <button className="Btn Btn-AddComment" >Add</button>
                    
                </form>
            )
        } else {
            output = (
                <div className="CommentsForm Locked"> 
                    <h4>Add Comments</h4>
                    <div className="LockedComment">
                            {this.props.value}
                            
                    </div>
                    <button className="Btn Btn-EditComment" onClick={this.toggleEdit}>Edit</button> 
                    
                </div>
            )
        }


        return output;
    }
}


export default CommentsForm;
