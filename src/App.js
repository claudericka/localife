import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from './Header';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from './login/SignIn';
import Home from './Home';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

function App() {

  const classes = useStyles();

  return (
      <Box>

        <Router>
         <Header />
        <div className={classes.heroContent}>
          <Switch>
            <Route path="/signIn" component={SignIn} />
            <Route path="/" exact component={Home}/>
          </Switch>

        </div>

        <Footer />
        </Router>
      </Box>
  );
}

export default App;
