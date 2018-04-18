import React, { Component } from 'react';
import { ButtonToolbar, Button, FormGroup, FormControl, ControlLabel, Col, Form } from 'react-bootstrap';
// import BandForm from '../BandForm/BandForm'
// import "react-awesome-popover/dest/react-awesome-popover.css";
// import MainHead from '../MainHead/MainHead'
// import { Navbar, Button, FormGroup, FormControl } from 'react-bootstrap';
// import Auth from '../../components/Auth/Auth.js';
import API from "../../utils/API";
import './Create.css';

class Create extends React.Component {
  
  constructor() {
    super();
    this.state = {
      create: null,
    }
  }

  login() {
    this.props.auth.login();
  }

  bandClick() {
    this.setState({create: "band"});
  }

  getBands = () => {
    API.getBands({})
      .then(res => JSON.stringify(res.data))
        // })
      //)
      .catch(err => console.log(err));
  };

  resetForm() {
    this.setState({
      name: '',
      description: '',
      bio: "",
      city: '',
      state: ''
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  };

  createBand = e => {
    e.preventDefault();

    var bandData = {
      name: this.state.name,
      description: this.state.description,
      bio: "",
      city: this.state.city,
      state: this.state.state
    }
    console.log(bandData)
    API.saveBand(bandData)
      .then(console.log(res => console.log(res)))
      .then(this.resetForm())
      .catch(err => console.log(err))
  
    

  };
  
  render() {
    if(this.state.create !== "band") {
      return (
        <div className="bandPop">
        
          <div className="create-header">
            Create
            <a href="#" className="glyphicon glyphicon-remove close-x"></a>
          </div>
       
          <div onClick={()=>this.bandClick()} className="add-stuff addBand">
            Add Band
          </div>
          <div className="add-stuff addShow">
            Add Show
          </div>
  
        </div>
      )
    } else if (this.state.create === "band")
      return (
      <div className="bandPop">
      
        <div className="create-header">
          Create
          <a href="#" className="glyphicon glyphicon-remove close-x"></a>
        </div>
     
        <form ref="bandForm" className="band-form" onSubmit={this.createBand}>

          <FormGroup controlId="formControlsText">
            <ControlLabel>Band Name</ControlLabel>
            <FormControl name="name" ref="name" type="text" componentClass="input" placeholder="band name" value={this.state.name} onChange={this.handleInputChange}/>
          </FormGroup>
          
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Description</ControlLabel>
            <FormControl name="description" ref="description" componentClass="textarea" placeholder="textarea" value={this.state.description} onChange={this.handleInputChange}/>
          </FormGroup>

          <FormGroup controlId="formControlsText">
            <ControlLabel>City</ControlLabel>
            <FormControl name="city" ref="city" type="text" componentClass="input" placeholder="city" value={this.state.city} onChange={this.handleInputChange}/>
          </FormGroup>

          <FormGroup controlId="formControlsText">
            <ControlLabel>State</ControlLabel>
            <FormControl name="state" ref="state" type="text" componentClass="input" placeholder="state" value={this.state.state} onChange={this.handleInputChange}/>
          </FormGroup>

          <Button type="submit">Submit</Button>

        </form>

      </div>
    )
    
  }
}

export default Create;