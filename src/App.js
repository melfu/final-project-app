import React, { Component } from "react";
import {} from "./Components/SignInForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LocationPicker from "./Components/LocationPicker";
import ActivityPicker from "./Components/ActivityPicker";
import DatePicker2 from "./Components/DatePicker2";
import Background from "./backgroundImage";

class App extends Component {
  render() {
    const style = {
      backgroundImage: `url(${Background})`,
      textAlign: 'center',
      color: 'white',
    }
    return (
      <div style = {style} className= "Main" >
        <h2>GoOut-Final Project App</h2>

        <h3>GoOut helps you easily plan a fun date. Pick a main event and it will show you the highest rated bars and restaurants nearby for a hassle free, easy going good time.</h3>
        <LocationPicker></LocationPicker>
        <DatePicker2></DatePicker2>
        <ActivityPicker></ActivityPicker>
      </div>
) 
  }
}

export default App;