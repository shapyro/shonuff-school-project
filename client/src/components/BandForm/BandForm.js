import React, { Component } from 'react';
// import './BandForm.css';

class BandForm extends React.Component {
  
  // constructor() {
  //   super();
  //   this.state = {
  //     create: null
  //   }
  // }

  login() {
    this.props.auth.login();
  }

  // addBand() {
  //   console.log('clicked')
  //   return <BandForm />
  // }
  

  render() {
    return (
      <div className="band-form">YOYOYOYO
        <form>
          <input></input>
        </form>
      </div>
    )
    
  }
}

export default BandForm;