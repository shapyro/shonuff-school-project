import React, { Component } from 'react';
import { Navbar, Button, FormGroup, FormControl, DropdownButton, MenuItem, OverlayTrigger, Popover } from 'react-bootstrap';
import Auth from './components/Auth/Auth.js';
import Create from './components/Create/Create'
import MainHead from './containers/MainHead/MainHead'
import Main from './containers/Main/Main.js'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      createVisible: false
    }
  }

  onClick() {
    this.setState(prevState => ({ createVisible: !prevState.createVisible }));
  }


  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated, userHasScopes } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header className="nav-header">
            {/* <Navbar.Brand className="brand">
              <a href="#">:)</a>
            </Navbar.Brand> */}
            <Button
              bsStyle="primary"
              className="btn-margin bands"
              onClick={this.goTo.bind(this, 'bands')}
            >
              Bands
            </Button>
            {
              // isAuthenticated() && (
                <Button
                  bsStyle="primary"
                  className="btn-margin shows"
                  onClick={this.goTo.bind(this, 'shows')}
                >
                  Shows
                </Button>
              // )
            }
            {
            <Navbar.Form pullLeft>
              <FormGroup>
              
                <FormControl type="text" placeholder="Search"  />
      
              </FormGroup>{' '}
              <Button type="submit" >
              <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
              </Button>
            </Navbar.Form>
            }
            {
              <Navbar.Brand className="brand">
                <a href="#">Shonuff</a>
              </Navbar.Brand>
            }

            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin profile"
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                  </Button>
                )
            }
            {/* {
              isAuthenticated() &&  userHasScopes(['write:messages']) && (
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'admin')}
                >
                  Admin
                </Button>
              )
            } */}
            {/* {
              isAuthenticated() && (
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'user')}
                >
                  CreateProfile
                </Button>
              )
            } */}
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin login"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin logout"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
            {
              isAuthenticated() && (

                  <Button onClick={()=>this.onClick()} className="button glyphicon glyphicon-plus add">

                    {
                      this.state.createVisible ? <Create onClick={this.state.createVisible = false} /> : null
                    }
               
                  </Button>
               
              )
            }
          </Navbar.Header>
        </Navbar>
        <MainHead/>
        <Main/>

      </div>
    );
  }
}

export default App;


