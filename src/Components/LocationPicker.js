import React, { Component } from "react";

export class LocationPicker extends Component {
    render() {
      return (
<form method="post">
<div class="form-group"> 
  <label class="control-label" for="location">Where</label>
  <input class="form-control" id="location" name="location" placeholder="Austin" type="text"/>
</div>
{/* <div class="form-group">
  <button class="btn btn-primary " name="submit" type="submit">Submit</button>
</div> */}
</form>
      )
    }
}

export default LocationPicker