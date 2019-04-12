import React, { Component } from "react";
const DEFAULT_QUERY = 'redux';

export class Results extends Component {
  constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
          where: "Austin",
          when: new Date(),
          eventType: "",
          isLoaded: false,
          events: []
        };
  }
    componentDidMount() {
        const eventbrite = "https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address=1100+Congress+Ave%2C+Austin%2C+TX+78701&location.within=20mi&token=TG6RXBBLAZPSB67I4NIP"
        let data = fetch(eventbrite + DEFAULT_QUERY)
        data.then(results => results.json()
        .then(res => {
            return this.setState({ events: res.events, isLoaded: true });
        }));
    }
        // .catch(error => {
        // console.log("something bad happened somewhere, rollback!", error);
        // });

  render() {
      let events = this.state.events;
      let isLoaded = this.state.isLoaded;
      if (!isLoaded) {
          return <div>Loading...</div>
      } else {
          return (
            <React.Fragment>
                { events.map((event) => 
                    {
                        return <Result key={event.id} event={event.name.text} />;
                    }
                    )}
                
            </React.Fragment>
          )
      }
      };
    }

const Result = (props) => <h1>{props.event.name.text}</h1>
export default Results;
// let events = data.results.map((event, index) => {
//     return (
//         <div key = {index}>
//             {event} 
//         </div>
//         )
//     })
