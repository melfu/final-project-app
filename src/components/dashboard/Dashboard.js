import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser} from "../../actions/authActions";
import { withRouter} from "react-router-dom";
import ActivityPicker from "../ActivityPicker";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      isLoading: true
    };
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  }
  // FUNCTION THAT FETCHES EVENTS FROM EVENTBRITE--------------//
  eventfetch = () => {
    const activity = localStorage.getItem("activity");

    fetch("/api/events/events?activity=" + activity)
      .then(response => response.json())
      .then(data => {

          if (data.events.logo ==false) 
          {
            this.props.setEvents(data.events.logo = "https://www.beol.hu/wp-content/uploads/2018/10/shutterstock351380480-900x600.jpg");
            this.props.setEvents(data.events.logo.url = "https://www.beol.hu/wp-content/uploads/2018/10/shutterstock351380480-900x600.jpg")
           } 
           this.props.setEvents(data.events);

        this.props.history.push("/results")
      });
  }
  //------------------------------------------------------------//

  render() {
    return ( 
    <div style = {{height: "75vh", fontFamily: "monospace", fontWeight: 'bold'}} className = "container valign-wrapper" >
      <div className = "row" >
        <div className = "col s12 center-align" >
         <h4> 
          <p className = "flow-text white-text text-darken-1" >
              Welcome to {" "} <span style = {{fontFamily: "monospace"}} > NearBy </span> 
          </p> 
        </h4> 
        <ActivityPicker />
        <button style = {{
            fontFamily: "monospace",
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
            backgroundColor: 'red'
        }}
        
          onClick = {this.eventfetch}
          className = "btn btn-large waves-effect waves-light hoverable red accent-3" >
          Search Events
        </button> 
            {this.eventfetch} 
        <button style = {{
          fontFamily: "monospace",
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          marginTop: "1rem"
        }}
          onClick = {this.onLogoutClick}
          className = "btn btn-large waves-effect waves-light hoverable red accent-3" >
          Logout 
        </button> 
    </div> 
    </div> 
    </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps, {
    logoutUser
  }
)(withRouter(Dashboard));