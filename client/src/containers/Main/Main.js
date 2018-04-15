import React, { Component } from 'react';
// import MainHead from '../MainHead/MainHead'
// import { Navbar, Button, FormGroup, FormControl } from 'react-bootstrap';
// import Auth from '../../components/Auth/Auth.js';
import './Main.css';

class Main extends Component {

  
  login() {
    this.props.auth.login();
  }

  render() {
    
    return (
      <div className="container">
       STUFF
      </div>
    )
  }
}

export default Main;