module.exports.events = (req, res) => {
    const token = `&token=TG6RXBBLAZPSB67I4NIP`;
    const activity = req.params.activity;
    const eventbrite = `https://www.eventbriteapi.com/v3/events/search/?expand=venue,logo&sort_by=best&location.address=1100+Congress+Ave%2C+Austin%2C+TX+78701&location.within=20mi&categories=` + activity + token;

    fetch(eventbrite)
      .then(response => response.json())
      .then(data => {
        res.json(data)
      });
  }