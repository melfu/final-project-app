import React, { Component } from "react";
import SignInForm, {} from "./Components/SignInForm";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LocationPicker from "./Components/LocationPicker";
import ActivityPicker from "./Components/ActivityPicker";
import DatePicker2 from "./Components/DatePicker2";
import Background from "./backgroundImage";
import Results from "./Components/Results";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      where: "Austin",
      when: new Date(),
      eventType: ""
    };
  }
  render() {
    const style = {
      backgroundImage: `url(${Background})`,
      textAlign: 'center',
      color: 'silver',
      fontWeight:'bold'
    }
    return (
      <Router>
      <div style = {style} className= "Main" >
      <h2>NearBy-Final Project App</h2>
      <Route exact={true} path="/" render={()=>
        <div>
            <h3>NearBy helps you plan a fun night out. Pick a main event and it will show you the highest-rated bars and restaurants nearby for a hassle free, easy going good time.</h3>
            <br></br>
            <SignInForm></SignInForm>
        </div>
      }/>
      <Route path="/signedin" render={()=>
      <div>
        <br></br>
        <LocationPicker></LocationPicker>
        <br></br>
        <DatePicker2></DatePicker2>
        <br></br>
        <br></br>
        <ActivityPicker></ActivityPicker>
        <br></br>
        <br></br>
        </div>
      }/>
      <Route path="/results" component={Results} />

      </div>
      </Router>
    ) 
  }
}

export default App;