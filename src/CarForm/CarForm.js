import React, { Component } from 'react';


import './CarForm.css'

 class CarForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            year: '',
            make: '',
            model: '',
            trim: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.getFormData = this.getFormData.bind(this);
    
    }


    handleChange(evt) {

            this.setState({
                [evt.target.name]: evt.target.value
            })
    
     
    }


   

    handleSubmit(evt) {
        evt.preventDefault();

        if(this.state.year === '' || this.state.make === '' || this.state.model === '') {
            alert('Enter required fields before adding car')
        } else {
            this.props.searchCar(this.state);

            this.setState({
                year: '',
                make: '',
                model: '',
                trim: ''
            })
        }


    }

       
    

  

    render() {




        
      
        return (
            <div className="CarForm"  >
                <form className="container Blurred" onSubmit={this.handleSubmit}>
                    <div className="Inner-container">
                        <div className="Input-Container">
                            <label htmlFor="year">Year <span>*</span></label>
                            <input className='formInput' id="year" value={this.state.year} name="year" onChange={this.handleChange} autoFocus></input>
                        </div>

                        <div className="Input-Container" >
                            <label htmlFor="make">Make <span>*</span></label>
                            <input className='formInput' value={this.state.make}  id="make" name ="make" onChange={this.handleChange}></input>
                        </div>

                        <div className="Input-Container" >
                            <label htmlFor="model">Model <span>*</span></label>
                            <input className='formInput' id="model" value={this.state.model} name ="model" onChange={this.handleChange}></input>
                        </div>

                        <div className="Input-Container" >
                            <label htmlFor="trim">Trim</label>
                            <input className='formInput' id="trim" value={this.state.trim} name ="trim" onChange={this.handleChange}></input>
                        </div>

                    </div>
                   

                   
                    <button className="Btn LoadCar">Add Car</button>
                    <p className="RequiredNote">* Required</p>
                </form>
                    
                
            </div>
        )
    }
}


export default CarForm;
