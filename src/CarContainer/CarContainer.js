import React, { Component } from 'react';
import CarForm from '../CarForm/CarForm';
import OutputControl from '../OutputControl/OutputControl';

import './CarContainer.css'

class CarContainer extends Component {
    constructor(props) {
        super(props);

      

        this.state = {
            currentSearch:''
        }

        this.searchCar = this.searchCar.bind(this);
        this.handleGaragedCar = this.handleGaragedCar.bind(this);
      
    }   


   



    searchCar(car) {
        this.setState({
            currentSearch: car
        })
    }

    handleGaragedCar() {
        this.setState({
            currentSearch:''
        })
    }




    render() {
        

        const currentSearch = this.state.currentSearch

    
        return (
            <div className="CarContainer">

                <CarForm searchCar={this.searchCar} getData={this.getData}/>
                <OutputControl currentSearch={currentSearch} getData={this.getData} handleGaragedCar={this.handleGaragedCar} />
               
                
            </div>
        )
    }
}


export default CarContainer;
