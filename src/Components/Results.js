import React, { Component } from "react";
//const DEFAULT_QUERY = 'redux';
import Background from "../backgroundImage";

function Results(props) {
  const events = props.events;
  if (events) {
    const eventlist = events.map((event) =>
    <div>
      <h1>{event.name.text}</h1>
      <h3>{event.summary}</h3>
      </div>
    );
    
    return (
      <ul>{eventlist}</ul>
    );
  } else {return null}
}
export default Results;
// export class Results extends Component {
//   constructor(props) {
//     super(props);
//     this.eventfetch = this.eventfetch.bind(this);

//     this.state = {
//     events: null,
//     date: null,
//     isLoading: true
//   };
//   }

//     // const event = localStorage.getItem("activity");      
//     // const isLoading = this.props.isLoading;
//     //   return isLoading ? (
//     //        <div> Loading...</div>
//     //   ): (
      
//     //  <ul style={{ backgroundImage: `url(${Background})`}} >
//     //              {event.map((event, id) =>
//     //              ( 
//     //              <React.Fragment key={id}>
                 
//     //              <h1 key={id+"name"}> {event.name.text} </h1>
//     //              <h5 key={id+"text"}>{event.summary} </h5>
//     //              <link key={id+"url"} href = {`event.resource_uri`}></link>
            
//     //              </React.Fragment>
//     //              ))} 
//     //       </ul>
//     //   );
//     //   };
//     // };

// // export default Results;

// eventfetch() {
//       const activity = localStorage.getItem("activity");
//       const eventbrite = `https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address=1100+Congress+Ave%2C+Austin%2C+TX+78701&location.within=20mi&categories=`+ activity + `&token=TG6RXBBLAZPSB67I4NIP`
//       console.log(eventbrite)
//       fetch(eventbrite)
//       .then(response => response.json())
//       .then(data => {
//           this.setState({ events: data.events, isLoaded: false });
//       })
//       .catch(error => {
//       console.log("something bad happened somewhere, rollback!", error);
//       });
//     }
//       render() {
//       const isLoading = this.state.isLoading;
//         return isLoading ? (
//              <div> Loading...</div>
//         ): (
        
//        <ul style={{ backgroundImage: `url(${Background})`}} >
//                    {/* {this.state.events.map((event, id) =>
//                    ( 
//                    <React.Fragment key={id}>
                   
//                    <h1 key={id+"name"}> {event.name.text} </h1>
//                    <h5 key={id+"text"}>{event.summary} </h5>
//                    <link key={id+"url"} href = {`event.resource_uri`}></link>
              
//                    </React.Fragment> */}
//                        <React.Fragment>
                   
//                    <h1> {this.events.name.text} </h1>
//                    <h5>{this.events.summary} </h5>
//                    <link href = {`this.events.resource_uri`}></link>
              
//                    </React.Fragment>
//                    {/* ))}  */}
//             </ul>
//         )};

//                    }
                  

