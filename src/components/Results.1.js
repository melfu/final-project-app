import React, { Component } from "react";
//const DEFAULT_QUERY = 'redux';
import Background from "../backgroundImage";

export class Results extends Component {
  constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
          when: new Date(),
          categoryId: "",
          isLoaded: true
        };
  }
    componentDidMount() {

        const activity = localStorage.getItem("activity");

        const eventbrite = "https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address=1100+Congress+Ave%2C+Austin%2C+TX+78701&location.within=20mi&token=TG6RXBBLAZPSB67I4NIP&categories="+{activity}
        console.log(eventbrite)
        fetch(eventbrite)
        .then(response => response.json())
        .then(data => {
            this.setState({ events: data.events, isLoaded: false });
        })
        .catch(error => {
        console.log("something bad happened somewhere, rollback!", error);
        });
    }
  render() {
      const event = this.state.events;
      const isLoaded = this.state.isLoaded;
      return isLoaded ? (
           <div> Loading...</div>
      ): (
     <ul style={{ backgroundImage: `url(${Background})`}} >
                 {event.map((event, id) => 
                 ( 
                 <React.Fragment key={id}>
                 
                 <h1 key={id+"name"}> {event.name.text} </h1>
                 <h5 key={id+"text"}>{event.description.text} </h5>
                 <link key={id+"url"} href = {`event.resource_uri`}></link>
            
                 </React.Fragment>
                 ))} 
          </ul>)  
      };
    };

export default Results;
