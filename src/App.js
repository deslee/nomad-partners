import React from 'react';
import Endeavor from './components/EndeavorView/EndeavorView';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import AppBar from './components/AppBar/AppBar';
import Grey from '@material-ui/core/colors/grey';

export const colors = {
    grey: Grey[200],
    blue: '#4385CC',
    tan: '#EDDBB6',
    red: '#C14F3E',
    green: '#5BCC47'
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.blue
        },
        secondary: {
            main: colors.tan
        },
        error: {
            main: colors.red
        }
    }
})

const styles = theme => ({
    root: {
        background: '#eee'
    },
    container: { 
        margin: '0 auto', 
        maxWidth: '1114px',
    }
})

class App extends React.Component {
    render() {
        const { classes } = this.props;
        return <div className={classes.root}>
            <div className={classes.container}>
                <Endeavor endeavor={{
                    title: 'Let\'s Climb That 14\'er!',
                    description: "Im Bryan! Great to meet you. I was born and raised right here in Denver, CO. My parents knew this place was hot in the \u201880s!\n\n\nIm 31, and have lived and enjoyed the outdoors all my life. I grew up skiing and hiking all around Colorado and I want to share my passion for adventure with others. I\u2019ve climbed 15 of the 54 - 14,000ft peaks of Colorado. I will work with you to tailor the climb to your skill set!\n\n\nFormer member of the National Ski Patrol and I am certified as an Outdoor Emergency Care Technician. I am all about fun and adventure but staying safe and coming home is my number 1 priority.\n\n\nWe will spend our morning hiking, climbing, exploring, 14,000 foot peaks on the Front range, Mosquito Range, and the Ten Mile Range of Colorado. Just outside Fairplay, Alma, and Breckenridge. All hikes are on known approved trails and routes. Class 1, 2, and 3, hikes. Class 4 requires technical climbing gear. We wont need this. But we will have an energy re-charge snack and food at the peak, take some great photos, and have a rigorous decent returning to the vehicles in the afternoon.",
                    budget: 'Blah blah blah under $1200 blah blah',
                    travelStyle: 'Adventurous',
                    verified: true,
                    profile: {
                        'Age': 24,
                        'firstName': 'Bryan',
                        'Gender': 'Male',
                        'Home City': 'Dallas, TX',
                        'Interests': [
                            'Hiking',
                            'Video Games',
                            'Rock Climbing'
                        ],
                        'Languages': [
                            'English',
                            'Spanish'
                        ]
                    },
                    activities: [
                        {
                            title: 'Visit DMA',
                            description: 'I am an artist, independent curator, and museum professional with a degree in Art History. Working in the arts for a decade, it is my passion and joy to share the hidden backstories behind some of the most famous works of art PLUS the fun of creation with people near and far!',
                            thumbnailUrl: 'https://placeimg.com/640/480/nature',
                            tags: []
                        },
                        {
                            title: 'Rock Climbing',
                            description: 'I love the outdoors! I love entroducing people to the many different activities we have to offer in Ireland. On top of that I can bring you to the best of locations guaranteeing you amazing views and an experience you will never forget.',
                            thumbnailUrl: 'https://placeimg.com/640/480/arch',
                            tags: []
                        },
                        {
                            title: 'Comedy Hollywood Sign Walk',
                            description: 'We\'ll cruise right to the TOP of the Hollywood Sign but not before we have stopped at the BEST locations for pictures and some great storytelling. I\'ve been in LA for 8 years--you wanna walk with a local and not a tour company.',
                            thumbnailUrl: 'https://placeimg.com/640/480/people',
                            tags: []
                        },
                    ]
                }} />
            </div>
        </div>
    }
}

const ThemedApp = withStyles(styles)(App);

export default () => <MuiThemeProvider theme={theme}>
    <AppBar />
    <ThemedApp />
</MuiThemeProvider>