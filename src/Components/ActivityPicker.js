import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export class ActivityPicker extends Component {
    render() {
      return (
<DropdownButton id="dropdown-basic-button" title="What type of event">
  <Dropdown.Item href="#/action-1">Arts</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Music</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Sports and Outdoors</Dropdown.Item>
  <Dropdown.Item href="#/action-4">Community</Dropdown.Item>
  <Dropdown.Item href="#/action-5">Film and Media</Dropdown.Item>

</DropdownButton>
      )
    }
}

export default ActivityPicker