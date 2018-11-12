import React from 'react';
import { AppBar, Typography, withStyles, IconButton, Toolbar, Button, Badge, Menu, MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddButton from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
    },
    title: {
        color: theme.palette.primary.contrastText
    },
    grow: {
        flexGrow: 1
    },
    link: {
        textDecoration: 'none'
    },
    profile: {
        color: theme.palette.primary.contrastText,
        marginLeft: '1rem'
    },
    menuItem: {
        color: theme.palette.primary.contrastText
    }
})

class MoxieAppBar extends React.Component {
    state = {
        menuAnchorEl: null
    }

    handleMenu = event => {
        this.setState({ menuAnchorEl: event.currentTarget });
    };

    handleCloseMenu = () => {
        this.setState({ menuAnchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { menuAnchorEl } = this.state;
        const open = Boolean(menuAnchorEl)
        return <AppBar className={classes.root} position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Moxie
                    </Typography>
                <div className={classes.grow} />
                <Link className={classes.link} to={`/matches`}>
                    <Button className={classes.menuItem}>Matches</Button>
                </Link>
                <Badge color="secondary" badgeContent={1}>
                    <Link className={classes.link} to={`/messages`}>
                        <Button className={classes.menuItem}>Messages</Button>
                    </Link>
                </Badge>
                <IconButton className={classes.profile} onClick={this.handleMenu}>
                    <AccountCircle />
                </IconButton>
                <Menu
                    open={open}
                    onClose={this.handleCloseMenu}
                    anchorEl={menuAnchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem onClick={this.handleClose}><AddButton /> Add Endeavor</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    }
}

export default withStyles(styles)(MoxieAppBar)