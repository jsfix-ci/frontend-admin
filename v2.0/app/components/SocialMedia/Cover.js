import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Info from '@material-ui/icons/Info';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import styles from './jss/cover-jss';
import { apiCall } from '../../utils/messenger';

const optionsOpt = [
  'Edit Profile',
  'Change Cover',
  'Option 1',
  'Option 2',
  'Option 3',
];

const ITEM_HEIGHT = 48;

class Cover extends React.Component {
  state = {
    anchorElOpt: null,
  };

  handleClickOpt = event => {
    this.setState({ anchorElOpt: event.currentTarget });
  };

  handleCloseOpt = () => {
    this.setState({ anchorElOpt: null });
  };
  goLive = () => {
    const val = this.props.community.is_published;
    const id = this.props.community.id;
    const body = { is_published: !val, is_dev:true, community_id:id };
    this.props.liveOrNotFxn(this.props.community);
    apiCall('/communities.update',body).then(res =>{
      console.log("You are live!");
    })
    .catch(err=>{
      console.log("Error:",err);
    })
  }

  showLiveBtn = () => {
    const val = this.props.community.is_published;
    const { classes } = this.props;
    if (val) {
      return (
        <div>
          <Button onClick={() => { this.goLive() }} variant="outlined" color="secondary" style={{ background: 'crimson', color: 'white', marginBottom: 8 }} className={classes.button}>
            Unpublish Me
            </Button>
        </div>
      )
    }
    else {
      return (
        <div>
          <Button onClick={() => { this.goLive() }} variant="outlined" color="primary" style={{ background: 'white', marginBottom: 8 }} className={classes.button}>
            Go Live
        </Button>
        </div>
      )
    }
  }

  render() {
    const {
      classes,
      avatar,
      name,
      desc,
      coverImg,
      community
    } = this.props;


    const { anchorElOpt } = this.state;
    return (
      <div className={classes.cover} style={{ backgroundImage: `url(${coverImg})` }}>
        <div className={classes.opt}>
          <IconButton className={classes.button} aria-label="Delete">
            <Info />
          </IconButton>
          <IconButton
            aria-label="More"
            aria-owns={anchorElOpt ? 'long-menu' : null}
            aria-haspopup="true"
            className={classes.button}
            onClick={this.handleClickOpt}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorElOpt}
            open={Boolean(anchorElOpt)}
            onClose={this.handleCloseOpt}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200,
              },
            }}
          >
            {optionsOpt.map(option => (
              <MenuItem key={option} selected={option === 'Edit Profile'} onClick={this.handleCloseOpt}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <div className={classes.content}>
          <Avatar alt={name} src={avatar} className={classes.avatar} />
          <Typography variant="h4" className={classes.name} gutterBottom>
            {name}
            <VerifiedUser className={classes.verified} />
          </Typography>
          <Typography className={classes.subheading} gutterBottom>
            {desc}
          </Typography>
          {this.showLiveBtn()}
          <a
            style={{ color: 'white' }}
            className={classes.button}
            href={community ? `http://${community.subdomain}.massenergize.org` : '#'}
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            variant="contained"
            color="secondary"
          >
            Visit Portal
          </a>
        </div>
      </div>
    );
  }
}

Cover.propTypes = {
  classes: PropTypes.object.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  community: PropTypes.object.isRequired
};

export default withStyles(styles)(Cover);
