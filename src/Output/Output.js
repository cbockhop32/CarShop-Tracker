import React, { Component } from 'react';
import './Output.css';
import SingleForm from '../utils/SingleForm';
import ListForm from '../utils/ListForm';
import CommentsForm from '../utils/CommentsForm';
import UploadImgForm from '../utils/UploadImgForm';
import ImgView from '../utils/ImgView';
import uuid from "uuid/dist/v4";

 class Output extends Component {
    constructor(props) {
        super(props);

        this.state = {
            price: '',
            mileage: '',
            location:'',
            listing:'',
            options: [],
            comments: '',
            imgUrl: null,
            showAddMsg: false
            
        }

       this.addSingleForm = this.addSingleForm.bind(this);
       this.addListForm = this.addListForm.bind(this);
       this.addCommentsForm = this.addCommentsForm.bind(this);
       this.handleAdd = this.handleAdd.bind(this);
       this.setImgURL = this.setImgURL.bind(this);
       this.handleShowAddMsg = this.handleShowAddMsg.bind(this);
       this.deleteListFormItem = this.deleteListFormItem.bind(this);
      

    }


    addSingleForm(name, val) {
        this.setState(st => ({
            ...st,
            [name]: val
        }))
    }

    addListForm(name, newItem) {
        this.setState(st => ({
            [name]: [...st[name], newItem ]
        }))
    }

    addCommentsForm(newComment) {
        this.setState({
            comments: newComment
        })
    }

    deleteListFormItem(name, id) {
        this.setState({
            [name]: this.state[name].filter(oldItem => {
                if(id !== oldItem.id) return oldItem
            })
        })
    }


    // You will have an addCarToGarage function that will package the props (make,mode, year) and the Output State(price, mileage,options, listings) into
    // an object and then somehow pass that whole object to OutputControl(state.carsInGarage) and then to CarGarge as a prop

   
    handleAdd() {

        


        const newCar = {
            year: this.props.year,
            make: this.props.make,
            model: this.props.model,
            trim: this.props.trim,
            price: this.state.price,
            mileage: this.state.mileage,
            location: this.state.location,
            listing: this.state.listing,
            options: this.state.options,
            comments: this.state.comments,
            imgUrl: this.state.imgUrl,
            id: uuid()
        }
       
        this.props.addCarToGarage(newCar);
        

        this.setState({
            price: '',
            mileage: '',
            location:'',
            currentOption: '',
            options: [],
            comments: '',
            imgUrl: null
            
        })

        this.props.handleGaragedCar();
        // this.handleShowAddMsg();

        

        
    }


    setImgURL(url) {
        this.setState({
            imgUrl: url
        })
    }


    handleShowAddMsg() {
        this.setState({
            showAddMsg: true
        });

        setTimeout(() => {
            this.setState({
                showAddMsg: false
            });
        }, 2000);
    }
  



  

   


    render() {

      
        let output;
        

        if(!this.props.make) {
            output = (

                <div className="Output">
                     <div className={`${this.state.showAddMsg ? 'CarAddModal Show' : "CarAddModal" }`}>
                        <h3>Car Added To Garage</h3>
                     </div>
                    <h3>Add a car to your current search to begin adding additonal details</h3>
                   
                </div>
             
            );


        } else {



            output = (
            
            <div className="Output">
                <div className="imgContainer">
                    <div className="CarHeader" >
                            <h3>{this.props.year} {this.props.make} {this.props.model} {this.props.trim} </h3>
                    </div>
                    <ImgView imgURL = {this.state.imgUrl} />
                    <UploadImgForm setImgURL={this.setImgURL}/>
                </div>

                <div className="detailsContainer">
                    <div className="CarFormContainer">
                        <div className="SingleFormContainer">
                            <SingleForm name="price" value={this.state.price} addSingleForm={this.addSingleForm}/>
                            <SingleForm name="mileage" value={this.state.mileage} addSingleForm={this.addSingleForm}/>
                            <SingleForm name="location" value={this.state.location} addSingleForm={this.addSingleForm}/>
                            <SingleForm name="listing" value={this.state.listing} addSingleForm={this.addSingleForm}/>
                            
                        </div>

                        <div className="ListFormContainer">
                            <ListForm name="options" items={this.state.options} addListForm={this.addListForm} deleteListFormItem={this.deleteListFormItem} />
                            <CommentsForm value={this.state.comments} addCommentsForm={this.addCommentsForm}/>
                        </div>
                    </div>

                    <button className="Btn AddCar" onClick={() => {this.handleAdd(); this.handleShowAddMsg();}}>Add Car To Garage</button>
                </div>

                

                
            </div>
                    
                
                ) 
            
      
            
            

        }
        

        return output
            
        
    }
}


export default Output;
