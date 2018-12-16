import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Card,CardActionArea,Typography,CardActions,CardContent,CardMedia} from '@material-ui/core';
import history from '../../../history';
import store from '../../../store/store';
import loggedinUser from '../../../services/getLoggedinUserService/getLoggedinUserService';
import './card.css';
import { debug } from 'util';



const styles = {
  card: {
    minWidth:300,
    maxWidth: 345,
    height:400,
    margin:20,
  },
  media: {
    height: 250,
  },
};

class MediaCard extends React.Component {
  constructor(){
    super();
    navigator.geolocation.getCurrentPosition((position) =>{
      this.state = {
        latitude:position.coords.latitude,
        longitude:position.coords.longitude
      }

    });
  }
  moveToMap(title){

    store.dispatch({
      type:'SET_CURRENT_LOCATION',
      latitude:this.state.latitude,
      longitude:this.state.longitude
    });
    loggedinUser.getUsers(title);
    history.push('/map');
  }
  render(){

    const { classes } = this.props;
    return (
      <div className = 'linkStyle'>
      <Card onClick={()=>{this.moveToMap(this.props.type)}} className={classes.card}>
        <CardActionArea>
          <CardMedia

            className={classes.media}
            image={this.props.src}
            title={this.props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography component="p">
                {this.props.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className = 'bgcolor'>


        </CardActions>
      </Card>
      </div>

  );
}
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);