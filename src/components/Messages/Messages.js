import React from 'react';
import { withStyles, List, ListItem, Avatar, ListItemText, Typography } from '@material-ui/core';

class Messages extends React.Component {
    static styles = {
        root: {
            backgroundColor: 'white',
            padding: '0 2rem'
        }
    }

    render() {
        const { 
            classes,
            messages
        } = this.props;

        return <div className={classes.root}>
            <Typography variant="overline">Messages</Typography>
            <List>
            {messages.map((message, i) => <ListItem button key={i}>
                <Avatar src={message.with.avatarUrl} />
                <ListItemText primary={message.with.firstName} secondary={message.message}></ListItemText>
            </ListItem>)}
        </List>
        </div>
    }
}

export default withStyles(Messages.styles)(Messages);