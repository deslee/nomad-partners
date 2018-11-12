import React from 'react';
import { Card, CardContent, Typography, CardMedia, withStyles } from '@material-ui/core';

class ActivityCard extends React.Component {
    static style = () => ({
        root: {},
        media: {
            height: '140px'
        }
    })

    render() {
        const {
            activity,
            classes
        } = this.props;
        
        const {
            title,
            description,
            thumbnailUrl
        } = activity;

        return <Card>
            <CardMedia
                className={classes.media}
                image={thumbnailUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{title}</Typography>
                <Typography>{description}</Typography>
            </CardContent>
        </Card>
    }
}

export default withStyles(ActivityCard.style)(ActivityCard);