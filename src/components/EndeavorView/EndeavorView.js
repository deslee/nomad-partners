import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, Grid, Paper, Avatar, Button } from '@material-ui/core';
import { colors } from '../../App';
import ConnectIcon from '@material-ui/icons/PersonAdd'
import IdentityVerifiedIcon from '@material-ui/icons/CheckCircle'
import Profile from './ProfileSection';
import ActivityCard from '../../components/ActivityCard/ActivityCard';

const styles = theme => ({
    root: {
        background: 'white',
        padding: '0 2rem'
    },
    titleDescription: {
        paddingLeft: '2rem',
        paddingRight: '2rem',
        paddingTop: '2rem',
        color: theme.palette.secondary.dark
    },
    title: {
        paddingLeft: '2rem',
        paddingRight: '2rem',
        paddingBottom: '1rem',
        color: theme.palette.primary.dark
    },
    generalInfoItem: {
        padding: '2rem'
    },
    avatar: {
    },
    budget: {
        padding: '0 2rem'
    },
    additionalInfoItem: {
        paddingRight: '1rem'
    },
    endeavorHeading: {
        display: 'flex',
        width: '100%'
    },
    grow: {
        flex: 1,
    },
    connectButton: {
        //background: theme.palette.primary.light,
        color: theme.palette.primary.main,
        margin: '1rem 0'
    },
    identityVerifiedIndication: {
        padding: '.5rem 0'
    },
    identityVerifiedIcon: {
        marginRight: '.25rem',
        color: colors.green,
        height: '2rem',
        display: 'inline-block'
    },
    identityVerifiedText: {
        display: 'inline-block',
        height: '2rem',
    },
    activities: {
        margin: '1.5rem'
    },
    activity: {
        margin: '.5rem'
    }
})



const EndeavorView = ({ endeavor: {
    activities = [],
    title,
    description,
    budget,
    profile,
    verified,
    travelStyle
}, classes }) => <Grid className={classes.root} container>
        <Grid container item xs={12}>
            <Grid item className={classes.endeavorHeading}>
                <Typography className={classes.titleDescription} variant="overline">Endeavor</Typography>
                <div className={classes.grow} />
                <Button className={classes.connectButton}>
                    <ConnectIcon />&nbsp;Connect with {profile.firstName}
                </Button>
            </Grid>
            <Grid item>
                <Typography className={classes.title} variant="h1">{title}</Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid className={classes.generalInfoItem} item xs={8}>
                <Typography color="textSecondary" variant="overline">Description</Typography>
                {description.split('\n').filter(t => t).map((text, i) => 
                    <React.Fragment key={i}>
                        <Typography>
                            {text}
                        </Typography><br />
                    </React.Fragment>
                )}
                <Grid container>
                    <Grid item className={classes.additionalInfoItem}>
                        <Typography color="textSecondary" variant="overline">Budget</Typography>
                        <Typography gutterBottom>{budget}</Typography>
                    </Grid>
                    <Grid item className={classes.additionalInfoItem}>
                        <Typography color="textSecondary" variant="overline">Travel style</Typography>
                        <Typography>{travelStyle}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.generalInfoItem} item xs={4}>
                <Typography color="textSecondary" variant="overline">About {profile.firstName}</Typography>
                <Avatar alt="Remy Sharp" src="https://a0.muscache.com/im/pictures/user/ff211dbb-ff68-4ed0-82eb-5dcde1073bb3.jpg?aki_policy=profile_x_medium" className={classes.avatar} />
                {
                    verified && <div className={classes.identityVerifiedIndication}>
                        <div className={classes.identityVerifiedIcon}><IdentityVerifiedIcon /></div>
                        <Typography className={classes.identityVerifiedText}>Identity Verified</Typography>
                    </div>
                }
                <Profile
                    profile={profile}
                />
            </Grid>
            <Grid className={classes.budget} item xs={12}>
            </Grid>
        </Grid>

        <Grid item xs={12}>
            <Typography className={classes.title} variant="h2" component="h2">Activities</Typography>
            <Grid className={classes.activities} container>
                    {activities.map((activity, idx) => 
                        <Grid xs={3} className={classes.activity} item key={idx}> 
                            <ActivityCard activity={activity} />
                        </Grid>   
                    )}
            </Grid>
        </Grid>
    </Grid >

export default withStyles(styles)(EndeavorView);