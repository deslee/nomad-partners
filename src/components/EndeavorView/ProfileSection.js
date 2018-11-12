import React from 'react';
import { withStyles, Typography } from '@material-ui/core';

class Profile extends React.Component {
    static style = theme => ({
        root: {
    
        },
        title: {
            paddingRight: '1rem',
            paddingTop: '1rem',
            color: theme.palette.primary.light
        },
        text: {
        }
    })

    render() {
        const { 
            classes,
            profile
        } = this.props;

        const profileMap = {
            age: 'Age',
            gender: 'Gender',
            homeCity: 'Home City',
            interests: 'Interests',
            languages: 'Languages'
        }

        return <div className={classes.root}>
            {Object.keys(profile).filter(key => profileMap[key]).map(profileItem => <React.Fragment key={profileItem}>
                <Typography className={classes.title}>{profileMap[profileItem]}</Typography>
                {profile[profileItem] && typeof (profile[profileItem]) === 'object' && profile[profileItem].length ?
                    <ul>
                        {profile[profileItem].map(text => <li key={text}><Typography className={classes.text}>{text}</Typography></li>)}
                    </ul> :
                    <Typography className={classes.text}>{profile[profileItem]}</Typography>}
            </React.Fragment>)}
        </div>
    }
}

export default withStyles(Profile.style)(Profile);