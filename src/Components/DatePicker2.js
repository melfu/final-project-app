import  React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class DatePicker2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
  }

  handlePickDate = (event) => {
    // create a function to handle date picker and set state
    this.setState({
      date: event.target.value
    });
    console.log("event.target.value", event.target.value)
    console.log("state",this.state)
    console.log('date picked!')
    }

  render() {
    const style = {
      maxWidth: 200
    };
    return (
      <div>
            <h6>When</h6>
      <DatePicker 
        style={style}
        selected={this.state.startDate}
        onChange={this.props.handlePickDate}
      />
      </div>
    );
  }
}

  export default DatePicker2