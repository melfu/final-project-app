import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  floatingLabelFocusStyle: {
    fontFamily: "monospace",
    color: "white"
},
  root: {
  minHeight: '675px',
  width: '100%'
  },
  container: {
  display: 'flex',
  flexWrap: 'wrap'
  },
  textField: {
  marginLeft: theme.spacing.unit,
  marginRight: theme.spacing.unit
  },
  dense: {
  marginTop: 16
  },
  menu: {
  width: 200
  },
  button: {
  marginRight: theme.spacing.unit
  }
  });

export class ActivityPicker extends Component {
  state = {
    anchorEl: null,
  };
  handlePickActivity = (event) => {
    // set categoryId in state
    this.setState({
      anchorEl: event.target.value
    // categoryId: this.state.categoryId
    });
    localStorage.setItem("activity", event.target.value);
    console.log("event.target.value",event.target.value)
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
    render() {
      const {classes}=this.props;
      const Activites = [
{id:105,value:'Art'},
{id:103,value:'Music'},
{id:108,value:'Sports and Fitness'},
{id:109,value:'Travel and Outdoors'},
{id:113,value:'Community'},
{id:104,value:'Film and Media'}
];
      return (
        <form className={classes.container} noValidate autoComplete="off">
      <TextField 
        style={{ fontFamily: "monospace", color: "white", backgroundColor: "none", border: "1px solid white" }}
            id="filled-uncontrolled"
            select
            className={classes.textField}
            label="What type of event are you looking for?"

            value={this.state.anchorEl}
            onChange={this.handlePickActivity}
            SelectProps={{
              MenuProps: {
              className: classes.menu
              }
              }}
              
            margin="normal"
            variant="filled"
            fullWidth
            InputLabelProps={{
              className: classes.floatingLabelFocusStyle,
              shrink: true,
          }}
            InputProps={{ style: { fontFamily: "monospace", color: "white" } }}

      >
            {Activites.map(option => (
            <MenuItem style={{ fontFamily: "monospace",text: "white" }}
            InputProps={{ style: { color: "white" } }}
            key={option.id}
            value={ option.id}
            >
            {option.value}
            </MenuItem>
            ))}
            </TextField>
      </form>
      )    
    }
}
export default withStyles(styles) (ActivityPicker)
