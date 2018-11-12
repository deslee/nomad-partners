import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, withStyles, CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Matches extends React.Component {
    static style = {
        media: {
            height: '160px'
        },
        link: {
            textDecoration: 'none'
        },
        title: {
        },
        text: {
        }
    }

    render() {
        const {
            endeavors,
            classes
        } = this.props;

        return <div>
            <Grid container>
                {endeavors.map(({ id, title, description, profile }, idx) => <Grid xs={4} item key={idx}>
                    <Link to={`/endeavors/${id}`} className={classes.link}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={profile.avatarUrl}
                                />
                                <CardContent>
                                    <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                                    {description.split('\n').filter(t => t).map((text, i) =>
                                        <React.Fragment key={i}>
                                            <Typography className={classes.text}>
                                                {text}
                                            </Typography><br />
                                        </React.Fragment>
                                    )}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>)}
            </Grid>
        </div>
    }
}

export default withStyles(Matches.style)(Matches);