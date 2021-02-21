import React, { Component } from 'react';
import './SearchResults.css';
import Output from '../Output/Output';
import searchSplash from '../img/searchSplash.jpg'


class SearchResults extends Component {
    // constructor(props) {
    //     super(props)

    // }

    render() {
        let result;
        
        if(this.props.currentSearch === "") {
            result =   
            
                <div className="SearchInnerContainer-NoSearch">

                    <div className="searchImgContainer">
                        <img src={searchSplash} alt="searchSplash"/>
                       
                    </div>

                    <div>
                        <h2>Welcome to /CarSearch/</h2>
                        <p>Your 'day-of' car buying tool designed to help you keep track of all your potential options</p>
                        
                    </div>
                    
                    
                    
                    
                </div>
        } else {
            result =   (
                <div className="SearchInnerContainer"  >
                      <h2>You Added:</h2>

                        <div>
                            <h2>{this.props.currentSearch.year} {this.props.currentSearch.make} {this.props.currentSearch.model} {this.props.currentSearch.trim}</h2>

                            <p>Add Additional Details Below Before Adding Potential Car To Your Garage</p>

                        </div>
                                            
                </div>
              
            )
            
            
            
        }


        return (

            // if state is null render blanket statements if not render current state
            <div className="SearchResults">
                <div className="SearchResults-Header">
                    {result}
                </div>
           
                <Output make={this.props.currentSearch.make} model={this.props.currentSearch.model} year={this.props.currentSearch.year} trim={this.props.currentSearch.trim} addCarToGarage={this.props.addCarToGarage} handleGaragedCar={this.props.handleGaragedCar} />
                
                
            </div>
        )
    }
}

export default SearchResults;
