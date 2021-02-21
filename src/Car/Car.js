import React, { Component } from 'react';
import './Car.css';
import {NavLink} from 'react-router-dom';
import { numberWithCommas } from '../utils/textFormats';

class Car extends Component {
    constructor(props) {
        super(props)

        this.state = {
            deletePrompted: false
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.promptDelete = this.promptDelete.bind(this);
    }


    handleDelete(evt) {
        this.props.removeCarFromGarage(evt.target.id);
        this.promptDelete();
    }

    promptDelete() {
        this.setState(st => ({
            deletePrompted: !st.deletePrompted
        }))
    }



    render() {
        const {imgUrl, year, make, model, price, mileage, trim, id} = this.props;

        let imgView;


        
        if(imgUrl === null) {
            imgView = <i className="fas fa-car fa-6x" style={{color:"#86C232"}}></i>;
        } else {
            imgView = <img src={imgUrl} style={{height: '90%', borderRadius:"5px"}} alt={id} />
        }
        

    

        return (
            <NavLink exact to={this.props.to} className="Car" activeClassName="Active-Car">
                <div className={`${this.state.deletePrompted ? "deleteModal show": "deleteModal" }`}>
                    <p>Delete this vehicle from My Garage?</p>
                    <div className="deleteModal-Btns">
                        <i className="fas fa-check-square fa-2x" id={id} onClick={this.handleDelete}></i>
                        <i className="fas fa-window-close fa-2x" onClick={this.promptDelete}></i>
                    </div>
                </div>



                <i className="fas fa-times-circle deleteCarBtn" id={id} onClick={this.promptDelete}></i>

                <div className="CarImgContainer">
                    {imgView}

                </div>
                

                <div className="CarLabel">
                    <h4>{year} {make} {model} {trim}</h4>
                    <p>Price: ${numberWithCommas(price) }</p>
                    <p className="CarMileage">Mileage: {numberWithCommas(mileage)} miles</p>
                   
                </div>
                    
            </NavLink>
        )
    }
}


export default Car;
