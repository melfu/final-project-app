import React, { Component } from "react";
//const DEFAULT_QUERY = 'redux';

export class Results extends Component {
  constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
          where: "Austin",
          when: new Date(),
          eventType: "",
          isLoaded: true
        };
  }
    componentDidMount() {
        const eventbrite = "https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address=1100+Congress+Ave%2C+Austin%2C+TX+78701&location.within=20mi&token=TG6RXBBLAZPSB67I4NIP"
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
           <div>Loading...</div>
      ): (
     <ul>
                 {event.map((event, id) => 
                 ( <h1 key={id}>{event.name.text}</h1> ))} 
          </ul>)
          
      };
    };

//const Result = (props) => <h1>{props.event.name.text}</h1>

export default Results;
