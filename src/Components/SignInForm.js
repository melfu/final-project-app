import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "react-bootstrap"

export class SignInForm extends Component {
    render() {
      const style = {
        maxWidth: 200
      }
      return (
<div className="container" style={style}>
  <Form>
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
<Button variant="primary" type="submit">
Submit
</Button>
</Form>
</div>
      );
    }
  }

export default SignInForm