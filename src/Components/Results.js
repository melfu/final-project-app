import React, { Component } from "react";
//const DEFAULT_QUERY = 'redux';
import Background from "../backgroundImage";

export class Results extends Component {

    // const event = localStorage.getItem("activity");      
    // const isLoading = this.props.isLoading;
    //   return isLoading ? (
    //        <div> Loading...</div>
    //   ): (
      
    //  <ul style={{ backgroundImage: `url(${Background})`}} >
    //              {event.map((event, id) =>
    //              ( 
    //              <React.Fragment key={id}>
                 
    //              <h1 key={id+"name"}> {event.name.text} </h1>
    //              <h5 key={id+"text"}>{event.summary} </h5>
    //              <link key={id+"url"} href = {`event.resource_uri`}></link>
            
    //              </React.Fragment>
    //              ))} 
    //       </ul>
    //   );
    //   };
    // };

// export default Results;

eventfetch() {
      const activity = localStorage.getItem("activity");
      const eventbrite = `https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address=1100+Congress+Ave%2C+Austin%2C+TX+78701&location.within=20mi&categories=`+ activity + `&token=TG6RXBBLAZPSB67I4NIP`
      console.log(eventbrite)
      fetch(eventbrite)
      .then(response => response.json())
      .then(data => {
          this.setState({ events: data.events, isLoaded: false });
      })
      .catch(error => {
      console.log("something bad happened somewhere, rollback!", error);
      });
      const isLoading = this.state.isLoading;
        return isLoading ? (
             <div> Loading...</div>
        ): (
        
       <ul style={{ backgroundImage: `url(${Background})`}} >
                   {this.state.events.map((event, id) =>
                   ( 
                   <React.Fragment key={id}>
                   
                   <h1 key={id+"name"}> {event.name.text} </h1>
                   <h5 key={id+"text"}>{event.summary} </h5>
                   <link key={id+"url"} href = {`event.resource_uri`}></link>
              
                   </React.Fragment>
                   ))} 
            </ul>
        )};
                   }
                  
export default Results;
