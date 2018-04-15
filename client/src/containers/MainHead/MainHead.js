import React, { Component } from 'react';
// import { Header } from 'react-bootstrap';
// import Auth from '../../components/Auth/Auth.js';
import './MainHeader.css';

class Main extends Component {

  
  login() {
    this.props.auth.login();
  }

  render() {
    
    return (
      <div className="container-head">
        <header className="main-header">
          <div className="band-show">
            Hard Proof
          </div>
        </header>
      </div>
    )
  }
}

export default Main;