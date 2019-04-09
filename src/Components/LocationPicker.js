import React, { Component } from "react";

export class LocationPicker extends Component {
    render() {
      const style = {
        maxWidth: 200,
        marginLeft: "auto",
        marginRight: "auto"      
      }
      return (
<form method="post">
<div class="form-group" style={style}> 
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