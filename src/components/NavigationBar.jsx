import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Dehaze} from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function NavigationBar () {
    const [anchorEl, setAnchorEl]=React.useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <Dehaze />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}><Link to={'/'}>Главная</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to={'/create-employee'}>Регистрация сотрудника</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to={'/settings'}>Настройки</Link></MenuItem>
        </Menu>
          <Typography variant="h6" className={classes.title}>
            Phoenix
          </Typography>
          </Toolbar>
      </AppBar>
    </div>
    )
}

export default NavigationBar;