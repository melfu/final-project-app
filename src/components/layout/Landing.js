import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div style={{ 
        fontFamily: "monospace",
        fontWeight: 'bold', 
        color: 'white',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
        textShadowColor: '#000',
        height: 100%,
        //height: "75vh", 
        opacity: 9 
        }} 
        className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
            NearBy helps you plan a fun night out! 
            </h4>
            <p className="flow-text white-text text-darken-1">
            Pick a main event. Then choose from the best bars and restaurants nearby. Design your good time. Then send your friends the invite!
            </p>
            <br />
            <a href= '/register/'
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable red accent-3"
            >
              Register
            </a>
            <a href='/login'
              style={{
                marginLeft: "2rem",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable red accent-3"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
