import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser} from "../../actions/authActions";
import { withRouter} from "react-router-dom";
import ActivityPicker from "../ActivityPicker";
import DatePicker2 from "../DatePicker2"

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.eventfetch = this.eventfetch.bind(this);

    this.state = {
      date: null,
      isLoading: true
    };
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  }
  handlePickDate = (event) => {
    // create a function to handle date picker and set state
    this.setState({
      date: event.target.value
    });
  }
  eventfetch = () => {
    const token = `&token=TG6RXBBLAZPSB67I4NIP`;
    const activity = localStorage.getItem("activity");
    const eventbrite = `https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address=1100+Congress+Ave%2C+Austin%2C+TX+78701&location.within=20mi&expand=venue&categories=` + activity + token;

    fetch(eventbrite)
      .then(response => response.json())
      .then(data => {
        this.props.setEvents(data.events);
        this.props.history.push("/results")
      });
  }
  render() {
    return ( 
    <div style = {{height: "75vh"}} className = "container valign-wrapper" >
      <div className = "row" >
        <div className = "col s12 center-align" >
         <h4> 
          <p className = "flow-text grey-text text-darken-1" >
              You are logged into {" "} <span style = {{fontFamily: "monospace"}} > NearBy </span> 👏 
          </p> 
        </h4> 
        <ActivityPicker />
        <DatePicker2 handlePickDate = {this.handlePickDate} > 
        </DatePicker2>
        <button style = {{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
        }}
          onClick = {this.eventfetch}
          className = "btn btn-large waves-effect waves-light hoverable blue accent-3" >
          Search 
        </button> 
            {this.eventfetch} 
        <button style = {{
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          marginTop: "1rem"
        }}
          onClick = {this.onLogoutClick}
          className = "btn btn-large waves-effect waves-light hoverable blue accent-3" >
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