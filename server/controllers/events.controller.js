// eventfetch = () => {
//     const token = `&token=TG6RXBBLAZPSB67I4NIP`;
//     const activity = localStorage.getItem("activity");
//     const eventbrite = `https://www.eventbriteapi.com/v3/events/search/?expand=venue,logo&sort_by=best&location.address=1100+Congress+Ave%2C+Austin%2C+TX+78701&location.within=20mi&categories=` + activity + token;

//     fetch(eventbrite)
//       .then(response => response.json())
//       .then(data => {

//           if (data.events.logo ==false) 
//           {
//             this.props.setEvents(data.events.logo = "https://www.beol.hu/wp-content/uploads/2018/10/shutterstock351380480-900x600.jpg");
//             this.props.setEvents(data.events.logo.url = "https://www.beol.hu/wp-content/uploads/2018/10/shutterstock351380480-900x600.jpg")
//            } 
//            this.props.setEvents(data.events);

//         this.props.history.push("/results")
//       });
//   }