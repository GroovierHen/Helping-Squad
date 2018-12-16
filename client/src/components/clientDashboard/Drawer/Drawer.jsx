import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import history from '../../../history';
import store from '../../../store/store'


const styles = {
  list: {
    width: 250,
    paddingLeft:30
  },
  fullList: {
    width: 'auto',
  },
};

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  logoutUser(){
    fetch('/logout_user',{
      
    }).then(function(res){
      return res.json()
    }).then(function(resp){
      if(resp){
        history.push('/')
      }
      store.dispatch({type:'USER_LOGOUT_RESPONSE'})
    })
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <h4>{this.props.name}</h4>
        <b>{this.props.email}</b><br></br>
        <button style = {{marginTop:'20px'}} onClick = {this.logoutUser.bind(this)}>LOGOUT</button>
      </div>
    );

   

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>
          <MenuIcon/>
        </Button>

        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
            className = 'check'
          >
            {sideList}
          </div>
        </SwipeableDrawer>
        
      </div>
    );
  }
}



SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);