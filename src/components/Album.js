import React, { Component } from 'react';
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
import "../backgroundImage.jpg";
import { Link } from "@material-ui/core";
//import NearByMap from './NearByMap';
import YelpFetchCards from './YelpFetchCards';

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
// END STYLE //


class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  nearByfetch = () => {
  
    var apiKey = "XlHGE6JndutZqhtVQJ4mW5e3bojls6JthQTTxHtFLLH2YyvSGkemgmFkZb0qcbu8AL0AWg2Ti7D56ADVHBtqawDoelacBgkfmuLg1AP3WigRPvHAdPRiIIrY-5rDXHYx"; 
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Austin&term=restaurant";
  
    var x = new XMLHttpRequest();
    x.open('GET', myurl);
    // I put "XMLHttpRequest" here, but you can use anything you want.
    x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    x.setRequestHeader('Authorization','Bearer '+ apiKey);
    x.onload = function() {
        alert(x.responseText);
        const stuffNearby = x.responseText
        this.props.setEvents(stuffNearby.businesses.name)
      //  this.props.history.push("/yelpfetchcards")

    };
    x.send();
}
render() {

  const { classes, events = [] } = this.props;
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
                    image= {event.logo ? event.logo.url : url ("../backgroundImage.jpg")}
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
                    <Button onClick={this.nearByfetch} component={Link} to={YelpFetchCards} size="small" color="primary">
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
}
Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album); 
