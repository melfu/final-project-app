import { Component } from "react";

class NearByMap extends Component {
    constructor(props) {
      super(props);
      this.state = {
        event: null,
        nearBy: null,
        isLoading: true
      };
    }
    // handlePickEvent = (event) => {
    //   // create a function to handle eventLoc picker and set state
    //   this.setState({
    //     nearBy: event.venue.address.address_1
    //   });
    // }
    // //-----------------------FUNCTION THAT FETCHES WHATS NEARBY FROM YELP-----//
    // nearByfetch = () => {
    //   const api_key = 'XlHGE6JndutZqhtVQJ4mW5e3bojls6JthQTTxHtFLLH2YyvSGkemgmFkZb0qcbu8AL0AWg2Ti7D56ADVHBtqawDoelacBgkfmuLg1AP3WigRPvHAdPRiIIrY-5rDXHYx-MDuLZLINw';
    //   // const activity = localStorage.getItem("activity");
    //   const yelp = require('yelp-fusion');
    //   const client = yelp.client(api_key, {
    //     mode: 'no-cors'
    //   });
       
    //   client.search({
    //     term: 'restaurant' || 'bar',
    //     location: 'austin,tx',
    //   }).then(response => {
    //     console.log("yelp response:", response.jsonBody.businesses.name);
    //     this.handlePickEvent();
    //   }).catch(e => {
    //     console.log(e);
    //   });
    // }
    //------------------------------------------------------------//
  }

  export default NearByMap
