import React, { Component } from 'react';
import API from '../../utils/API'

class Bands extends Component {

  constructor() {
    super();
    this.state = {
      bands: []
    }
  }

  login() {
    this.props.auth.login();
  }
  
  componentDidMount() {
    // getBands = () => {
      API.getBands({})
      .then(res =>
        this.setState({
          bands: res.data,
          message: !res.data.length
            ? "No New Articles Found, Try a Different Query"
            : ""
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.bands)
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            
              <h4>
                You are logged in!
                Here are some Bands!
              </h4>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Bands;
