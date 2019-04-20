import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export class ActivityPicker extends Component {
  state = {
    ActivityPickerValue: null,
  }
    render() {
      return (
<DropdownButton id="dropdown-basic-button" title="What type of event">
  <Dropdown.Item value= "art" href="#/action-1" onClick={this.props.handlePickActivity}>Art</Dropdown.Item>
  <Dropdown.Item value= "103" href="#/action-2" onClick={this.props.handlePickActivity}>Music</Dropdown.Item>
  <Dropdown.Item value= "sports and outdoors" href="#/action-3" onClick={this.props.handlePickActivity}>Sports and Outdoors</Dropdown.Item>
  <Dropdown.Item value= "community" href="#/action-4" onClick={this.props.handlePickActivity}>Community</Dropdown.Item>
  <Dropdown.Item value= "film and media" href="#/action-5" onClick={this.props.handlePickActivity}>Film and Media</Dropdown.Item>
</DropdownButton>
      )
    }
}

export default ActivityPicker