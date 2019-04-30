import React, { Component } from "react";

class NearByMap extends Component {
    constructor(props) {
      super(props);
      this.state = {
        event: null,
        isLoading: true
      };
    }
    handlePickEvent = (event) => {
      // create a function to handle eventLoc picker and set state
      this.setState({
        event: event.venue.address.address_1
      });
      // console.log(event.target.value)
    }
    eventLocfetch = () => {
      const api_key = 'XlHGE6JndutZqhtVQJ4mW5e3bojls6JthQTTxHtFLLH2YyvSGkemgmFkZb0qcbu8AL0AWg2Ti7D56ADVHBtqawDoelacBgkfmuLg1AP3WigRPvHAdPRiIIrY-5rDXHYx-MDuLZLINw';
      const activity = localStorage.getItem("activity");
      const yelp = require('yelp-fusion');
      const client = yelp.client(api_key);
       
      client.search({
        term: 'restaurant' || 'bar',
        location: 'austin,tx',
      }).then(response => {
        console.log(response.jsonBody.businesses[0].name);
      }).catch(e => {
        console.log(e);

      });

    }
  }

  export default NearByMap

 