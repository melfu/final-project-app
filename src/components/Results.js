import React from "react";
function Results(props) {
  const events = props.events;
  if (events) {
    const eventlist = events.map((event) =>
    <div key= {event.id}>
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

                  

