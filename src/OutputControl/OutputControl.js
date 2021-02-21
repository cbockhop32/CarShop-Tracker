import React, { Component } from 'react';
import './OutputControl.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import CarGarage from '../CarGarage/CarGarage';
import SearchResults from '../SearchResults/SearchResults';






class OutputControl extends Component {
    constructor(props) {
        super(props)

        this.state = {
            carsInGarage: [] 
        }


        this.addCarToGarage = this.addCarToGarage.bind(this);
        this.removeCarFromGarage = this.removeCarFromGarage.bind(this);
    }

    componentDidMount() {
        const savedCars = JSON.parse(window.localStorage.getItem('carsInGarage'));

        
        
        if(savedCars !== null) {
            this.setState({
                carsInGarage: [...savedCars]
            })

          
        } 
        
    }


    addCarToGarage(newCar) {
       this.setState(st => ({
           carsInGarage: [...st.carsInGarage, newCar]
       }), () => {window.localStorage.setItem('carsInGarage', JSON.stringify(this.state.carsInGarage))});


       


       
    }

    removeCarFromGarage(carID) {
       this.setState({
           carsInGarage: this.state.carsInGarage.filter(car => {
                if(car.id !== carID) return car
           })
       }, () => {window.localStorage.setItem('carsInGarage', JSON.stringify(this.state.carsInGarage))})

    }


    render() {
        return (
            <div className="OutputControl">
               
                <div className="OutputControlSelector">
                    <NavLink exact to="/" className="NavLink" activeClassName="ActiveNavLink">Search</NavLink>
                    <NavLink to="/garage" className="NavLink" activeClassName="ActiveNavLink">My Garage</NavLink>
                </div>


                <div className="OutputControlView">
                    <Switch>
                        <Route exact path='/' render={() => <SearchResults addCarToGarage={this.addCarToGarage} currentSearch={this.props.currentSearch} getData={this.props.getData} handleGaragedCar={this.props.handleGaragedCar}/>} />
                        <Route path='/garage' render={() => <CarGarage carsInGarage={this.state.carsInGarage} removeCarFromGarage={this.removeCarFromGarage}/>} />
                    </Switch>


                </div>
                   

                
            </div>
        )
    }
}

export default OutputControl;
