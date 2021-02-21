import React, { Component } from 'react';
import './Form.css';
import uuid from "uuid/dist/v4";

export class ListForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: true,
            value: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
    }


    handleChange(evt) {
        this.setState({
            value: evt.target.value
        })  

    }

    handleSubmit(evt) {
        evt.preventDefault();

        if(this.state.value === '') {
            alert('Please enter valid entry')
        } else {
            const newListItem = {
                value: this.state.value,
                id: uuid()
            };
    
            // pass this into the handleAddFunction
    
            this.props.addListForm(this.props.name, newListItem)
    
            this.setState({
                isEditing: false,
                value: ""
            })   

        }

        
    }

    handleClick(evt) {
        const id = evt.target.id;
        const name = this.props.name

    

        this.props.deleteListFormItem(name, id);

    }



    render() {
        return (
            <div className="ListForm">
                 <h4>Add {this.props.name}</h4>


                <form className="form" onSubmit={this.handleSubmit}>
                   
                    <label>{this.props.name}</label>
                    <input className='formInput' type="text" name={this.props.name} value={this.state.value} onChange={this.handleChange} ></input>
                    <button className="Btn">Add {this.props.name}</button>
                </form>

                <ul className="List">
                    {this.props.items.map(item => (
                        <li className="ListItem" key={item.id} >{item.value}<i className="fas fa-minus-circle" id={item.id} onClick={this.handleClick}></i></li>
                    ))}

                </ul>
            


            </div>
        )
    }
}

export default ListForm
