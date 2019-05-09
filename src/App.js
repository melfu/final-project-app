import React, { Component } from "react";
import Background from "./backgroundImage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Album from './components/Album';
import NearByMap from './components/NearByMap';

// LOGIN STUFF-DONT CHANGE---------------------------
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
} 
// --------------------------------------------------

class App extends Component {

  state = {
    events: []
  };

  setEvents = (events) => {
    this.setState({
      events: events
    });
  };

  handlePickEvent = (event) => {
    console.log(event)
    const api_key = 'XlHGE6JndutZqhtVQJ4mW5e3bojls6JthQTTxHtFLLH2YyvSGkemgmFkZb0qcbu8AL0AWg2Ti7D56ADVHBtqawDoelacBgkfmuLg1AP3WigRPvHAdPRiIIrY-5rDXHYx-MDuLZLINw';
    const activity = localStorage.getItem("activity");
    const yelp = require('yelp-fusion');
    const client = yelp.client(api_key, {
      mode: 'no-cors'
    });
     
    client.search({
      term: 'restaurant' || 'bar',
      location: 'austin, tx'
    }).then(response => {
      console.log(response.jsonBody.businesses[0].name);
    }).catch(e => {
      console.log(e);

    });

  }


  render() {
    return (
      <Provider store={store}>
        <Router >
          <div className="App" style={{ backgroundImage: `url(${Background})`, opacity: 0.6,
          //height: "85vh"
           }}>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/results" component={() => <Album handlePickEvent={this.handlePickEvent}
          events={this.state.events} />} />
          <Route exact path="/nearbymap" component={() => <NearByMap handlePickEvent={this.handlePickEvent.bind(this)} setEvents={this.setEvents} />} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={() => <Dashboard setEvents={this.setEvents} />} />
          </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;