import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
// import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Ping from './components/Ping/Ping';
import Admin from './components/Admin/Admin';
import Shows from './containers/Shows/Shows';
import Main from './containers/Main/Main';
import Bands from './containers/Bands/Bands'
import Create from './components/Create/Create'
import CreateProfile from './components/CreateProfile/CreateProfile';
import Callback from './components/Callback/Callback';
import Auth from './components/Auth/Auth';
import history from './history';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const auth = new Auth();
const store = configureStore();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          {/* <Route path="/home" render={(props) => <Home auth={auth} {...props} />} /> */}
          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />
          <Route path="/ping" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Ping auth={auth} {...props} />
            )
          )} />
          <Route path="/shows" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Shows auth={auth} {...props} />
            )
          )} />
          <Route path="/user" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <CreateProfile auth={auth} {...props} />
            )
          )} />
          <Route path="/admin" render={(props) => (
            !auth.isAuthenticated() || !auth.userHasScopes(['write:messages']) ? (
              <Redirect to="/home"/>
            ) : (
              <Admin auth={auth} {...props} />
            )
          )} />
          <Route path="/main" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Main auth={auth} {...props} />
            )
          )} />
          <Route path="/create" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Create auth={auth} {...props} />
            )
          )} />
          <Route path="/bands" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Bands auth={auth} {...props} />
            )
          )} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
    </Provider>
  );
}
