import React from 'react';
import { AppBar, Typography, withStyles, IconButton, Toolbar, Button, Badge } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
    root: {
    },
    title: {
        color: theme.palette.primary.contrastText
    },
    grow: {
        flexGrow: 1
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
    render() {
        const { classes } = this.props;
        return <AppBar className={classes.root} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Moxie
                    </Typography>
                    <div className={classes.grow} />
                    <Button className={classes.menuItem}>Matches</Button>
                    <Badge color="secondary" badgeContent={2}>
                        <Button className={classes.menuItem}>Messages</Button>
                    </Badge>
                    <IconButton className={classes.profile}>
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
    }
}

export default withStyles(styles)(MoxieAppBar)