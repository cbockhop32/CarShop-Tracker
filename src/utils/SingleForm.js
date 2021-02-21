import React, { Component } from 'react';
import './Form.css'
import {numberWithCommas} from './textFormats';
import {isNum} from './textFormats';


class SingleForm extends Component {
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


    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }


    handleChange(evt) {
        this.setState({
            value: evt.target.value
        })


    }

    handleSubmit(evt) {
        evt.preventDefault();

        const validNum = isNum(this.state.value);
        const isYearOrMiles = this.props.name === 'price' || this.props.name === 'mileage';

        if(isYearOrMiles && !validNum) {
            alert(`Please enter valid ${this.props.name} `)
        } else {
            this.props.addSingleForm(this.props.name, this.state.value)

            this.setState({
                isEditing: false
            })
        }

            

        
    }



    render() {

        let result;
        let lockedValue;
        let placeholder;

        if(this.props.name === 'price') {
            placeholder = 'Enter Vehicle Price'
        } else 

        if(this.props.name === 'mileage') {
            placeholder = 'Enter Vehicle Mileage'
        }

        if(this.props.name === 'location') {
            placeholder = 'Enter Vehicle Location'
        }

        if(this.props.name === 'listing') {
            placeholder = 'Enter URL to Online Listing'
        }





        if(this.props.name === 'listing') {
            lockedValue = (
                <a className="LockedValue" href={this.props.value} target="_blank" >Link to Listing</a>
            )
        } else {
            lockedValue = (
            <p className="LockedValue"> 
                {this.props.name === 'price' ? numberWithCommas(`$${this.props.value}`) :
                this.props.name === 'mileage' ? numberWithCommas(`${this.props.value} miles`) :
                this.props.value}
            </p>
            )
        }

        if(this.state.isEditing) {
            result = (
                <div className="SingleForm">

                    <form className="form" onSubmit={this.handleSubmit} >
                        <label>{this.props.name}</label>
                        <input className='formInput' type="text" name={this.props.name} onChange={this.handleChange} value={this.state.value} placeholder={placeholder}></input>
                        <button className="Btn Btn-Save">Save</button>
                    </form>
        
                 </div>
            )
        } else {
            result = (
            <div className="SingleForm">
                <div className="form">
                    <p>{this.props.name}</p>
                    {lockedValue}
                    <button className="Btn Btn-Edit" onClick={this.toggleEdit}>Edit</button>
                </div>
            </div>
            )
        }
        


        return result;
           
        
    }
}

export default SingleForm;
