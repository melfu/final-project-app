import React, { Component } from "react";
// import { Button, Form } from "react-bootstrap";
import "react-bootstrap"

export class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
  componentDidMount() {
    const eventbrite = "https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address=1100+Congress+Ave%2C+Austin%2C+TX+78701&location.within=20mi&token=TG6RXBBLAZPSB67I4NIP"
    fetch(eventbrite)
    .then(response => response.json())
    .then(data => { console.log(data)
    })
    .catch(error => {
    console.log("something bad happened somewhere, rollback!", error);
    });
}
handleChange = name => event => {
  this.setState({
  [name]: event.target.value
  });
  // this.props.selectValue(name, event.target.value);
  };

handleSubmit(event){
  //fetch post call to localhost:1234/api/authenticate
  
}
    render() {
      const style = {
        maxWidth: 200
      }
      console.log(this.state.username)
      console.log(this.state.password)

      return (
<div className="container" style={style}>
  {/* <Form>
<Form.Group controlId="formBasicEmail">
<Form.Label>Username</Form.Label>
<Form.Control type="text" placeholder="Username" />
<Form.Text className="text-muted">
</Form.Text>
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group controlId="formBasicChecbox">
</Form.Group>
<Button variant="primary" onClick={this.handleSubmit()}>
Submit
</Button>
</Form> */}
<form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.password} onChange={this.handleChange('password')} />
          <input type="submit" value="Submit" />
        </label>
      </form>
</div>
      );
    }
  }

export default SignInForm