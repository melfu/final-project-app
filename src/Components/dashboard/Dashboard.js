import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import ActivityPicker from "../ActivityPicker";
import DatePicker2 from "../DatePicker2"
import Results from '../Results'

class Dashboard extends Component {
  state = {
    categoryId: null,
    date: null
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

handlePickActivity = () => {
  // set categoryId in state
  this.setState({
    categoryId: this.state.categoryId
  });
  console.log('activity picked!')
}
handlePickDate = () => {
// create a function to handle date picker and set state
this.setState({
  date: this.state.date
});
console.log('date picked!')
}
render() {

    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              {/* <b>Hey there,</b> {user.username.split(" ")[0]} */}
              <p className="flow-text grey-text text-darken-1">
                You are logged into {" "}
                <span style={{ fontFamily: "monospace" }}>NearBy</span> 👏
              </p>
            </h4>
            <ActivityPicker handlePickActivity={this.handlePickActivity}></ActivityPicker>
            <DatePicker2 handlePickDate={this.handlePickDate}></DatePicker2>
            {/* <Results categoryId={this.state.categoryId} date={this.state.date} /> */}
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
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
  mapStateToProps,
  { logoutUser }
)(Dashboard);