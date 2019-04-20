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
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(date) {
  //   this.setState({
  //     startDate: date
  //   });
  // }

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