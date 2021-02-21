import React, { Component } from 'react';
import { numberWithCommas } from '../utils/textFormats';
import './OutputGarage.css'




class OutputGarage extends Component {
    // constructor(props) {
    //     super(props)
    // }

    

   


    render() {

   
        const {imgUrl, year, make, model, price, mileage, trim, options, comments, location, listing,id} = this.props;
        let output;
        let CarImg;


        if(imgUrl !== null) {
            CarImg = <img src={imgUrl} alt={id}></img>;
        } else {
            CarImg = <i className="fas fa-car fa-10x" style={{color:"#86C232"}}></i>;
        }



        

        if(!this.props) {
            output = `Select or Search for car to view its details`
        } else {
            output = (
                <div className="OutputGarage">

                    <div className="OutputGarage-Inner">
                        <div className="InnerHeader">
                            <h2>{year} {make} {model} {trim}</h2>
                            <div className="HeaderImg-Container"> 
                                {CarImg}
                            </div>
                                
                        </div>
                        
                        <div className="InnerDetails">
                            <a href={listing} className="Btn Btn-Link" target="_blank">Link to Online Listing</a>
                            <div className="Detail-Single">
                                <strong>Price:</strong><p>${numberWithCommas(price)}</p>
                            </div>

                            <div className="Detail-Single">
                                <strong>Mileage:</strong><p>{numberWithCommas(mileage)} miles</p>
                            </div>

                            <div className="Detail-Single">
                                <strong>Location:</strong><p>{location}</p>
                            </div>

                            <div className="Detail-List">
                                <strong>Options:</strong>
                                <ul>
                                    {options.map(option => <li key={option.value}>{option.value}</li>)}
                                </ul>
                            </div>

                            <div className="Detail-Comments">
                                <strong>Comments:</strong>
                                <p>{comments}</p>
                            </div>
                        </div>

                            

                    </div>
                    
                </div>
            )

        }
        

        return output
    }
}


export default OutputGarage;


