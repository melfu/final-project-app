import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Background from "../backgroundImage";
import { Link } from "@material-ui/core";
import NearByMap from './NearByMap';

const styles = theme => ({
  appBar: {
    position: 'relative',
    marginTop: 10},
  icon: {
    marginRight: theme.spacing.unit * 2,},
  heroUnit: {
    backgroundColor: theme.palette.background.paper,},
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,},
  heroButtons: {
    marginTop: theme.spacing.unit * 4,},
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',},},
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,},
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',},
  cardMedia: {
    paddingTop: '56.25%', // 16:9
},
  cardContent: {
    flexGrow: 1,},
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,},});

const handlePickEvent = (event) => {
  // create a function to handle eventLoc picker and set state
  this.setState({
    nearBy: event.venue.address.address_1
  });
}

//------------------------ABBYS YELP FETCH-------------------------------------------//

// nearByfetch(rating) {  const api_key = 'XlHGE6JndutZqhtVQJ4mW5e3bojls6JthQTTxHtFLLH2YyvSGkemgmFkZb0qcbu8AL0AWg2Ti7D56ADVHBtqawDoelacBgkfmuLg1AP3WigRPvHAdPRiIIrY-5rDXHYx-MDuLZLINw';
// // const activity = localStorage.getItem("activity");
// const yelp = require('yelp-fusion');
// const client = yelp.client(api_key, {
//   mode: 'no-cors'
// });

//   const restaurant = this.props.returnedRestaurant
//   const restaurantBody = {
//       name: restaurant.name,
//       genre: restaurant.categories[0].title,
//       price: restaurant.price,
//       location: restaurant.location.display_address.join(" "),
//       rating: rating
//   }
//   fetch(`${process.env.REACT_APP_API_URL}/restaurants`, {
//       method: "POST",
//       body: JSON.stringify(restaurantBody),
//       headers: {
//           "Content-Type": "application/json"
//       }
//   })
//       .then(res => res.json())
//       .then(restaurantData => {
//       })
//       .then(this.setState({
//           restaurantSaved: true
//       }))
//       // resetting restaurantSaved to false after 1 second to show saved message again
//       .then(setTimeout(() => {
//           this.setState({ restaurantSaved: false });
//       }, 1000))}
//-----------------------------------------------------------------------//

//-----------------------FUNCTION THAT FETCHES WHATS NEARBY FROM YELP-----//
const nearByfetch = () => {
  const api_key = 'XlHGE6JndutZqhtVQJ4mW5e3bojls6JthQTTxHtFLLH2YyvSGkemgmFkZb0qcbu8AL0AWg2Ti7D56ADVHBtqawDoelacBgkfmuLg1AP3WigRPvHAdPRiIIrY-5rDXHYx-MDuLZLINw';
  // const activity = localStorage.getItem("activity");
  const yelp = require('yelp-fusion');
  const client = yelp.client(api_key, {
    mode: 'no-cors'
  });
   
  client.search({
    term: 'restaurant' || 'bar',
    location: 'austin,tx',
  }).then(response => {
    console.log("yelp response:", response.jsonBody.businesses.name);
    handlePickEvent();
  }).catch(e => {
    console.log(e);
  });
}

function Album(props) {
  const { classes, events = [] } = props;
  if (!events || events.length === 0) return null;
console.log(events)
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {events.map(event => (
              <Grid item key={event.id} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {event.logo ? event.logo.url : `${Background}`}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {event.name.text}
                    </Typography>
                    <Typography>
                        {event.summary}             
                   </Typography>
                  </CardContent>
                  <CardActions>
                    <Button component={Link} href={event.url} size="small" color="primary">
                      View Event
                    </Button>
                    <Button onClick={nearByfetch} component={Link} to={NearByMap} size="small" color="primary">
                      What's Nearby
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Have Fun!
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Thanks for using NearBy!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album); 