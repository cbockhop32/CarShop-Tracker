import React, { Component } from 'react';
import Car from '../Car/Car';
import './CarGarage.css';
import OutputGarage from '../OutputGarage/OutputGarage';
import {Switch, Route} from 'react-router-dom';

class CarGarage extends Component {
    // constructor(props) {
    //     super(props);

       

       
    // }



    render() {
      
        let output;


        const cars = this.props.carsInGarage.map((car) => (
            // <Car to={`/garage/${car.id}`} model={car.model} year={car.year} make={car.make} key={car.id} id={car.id} url={car.imgUrl} />
            <Car to={`/garage/${car.id}`} {...car} removeCarFromGarage={this.props.removeCarFromGarage} key={car.id} />
        ) )


        const carRoutes = this.props.carsInGarage.map((car) => (
            <Route  exact path={`/garage/${car.id}`} key={car.id} render={() => <OutputGarage {...car}   /> }  />
        ))


        if(this.props.carsInGarage.length === 0) {
            output = (
                <div className='CarGarage'>
                    <div className='CarGarage-Header Empty'>
                        <h2>My Garage is Empty</h2>
                        <p>Go to the Search tab and add a car to begin building out a profile for that car</p>
                        <p>Once finished, click 'Add Car To Garage' to save the car into 'My Garage' </p>
                        
                    </div>
                </div>
                
            )
        } else {
            output = (

                <div className='CarGarage'>
                    <div className="CarGarage-Header">
                        {cars}
                    </div>
                    <Switch>
                        {carRoutes}
                    </Switch>
                 </div>
            )
            
        }



       



        return output;

            
    }
}


export default CarGarage;
