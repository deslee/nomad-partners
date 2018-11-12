import React from 'react';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import AppBar from './components/AppBar/AppBar';
import Grey from '@material-ui/core/colors/grey';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MatchesRoute from './routes/MatchesRoute';
import EndeavorRoute from './routes/EndeavorRoute';
import MessagesRoute from './routes/MessagesRoute';

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

const styles = () => ({
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
                    <Route exact path="/matches" component={MatchesRoute} />
                    <Route exact path="/messages" component={MessagesRoute} />
                    <Route exact path="/endeavors/:endeavorId" component={EndeavorRoute} />
                </div>
            </div>
    }
}

const ThemedApp = withStyles(styles)(App);

export default () => <MuiThemeProvider theme={theme}>
    <Router>
        <div>
            <AppBar />
            <ThemedApp />
        </div>
    </Router>
</MuiThemeProvider>