import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser} from "../../actions/authActions";
import { withRouter} from "react-router-dom";
import ActivityPicker from "../ActivityPicker";
// import DatePicker2 from "../DatePicker2";
// import Background from "../../backgroundImage"

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
  // handlePickDate = (event) => {
  //   // create a function to handle date picker and set state
  //   this.setState({
  //     date: event.target.value
  //   });
  //   console.log(event.target.value)

  // }
  eventfetch = () => {
    const token = `&token=TG6RXBBLAZPSB67I4NIP`;
    const activity = localStorage.getItem("activity");
    const eventbrite = `https://www.eventbriteapi.com/v3/events/search/?expand=venue,logo&sort_by=best&location.address=1100+Congress+Ave%2C+Austin%2C+TX+78701&location.within=20mi&categories=` + activity + token;

    fetch(eventbrite)
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