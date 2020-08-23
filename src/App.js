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
import SearchArea from './SearchArea';
import Category from './Category';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from './login/SignIn';

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
        <Header />
        <div className={classes.heroContent}>

        <Router>
          <Switch>
            <Route path="/signIn" component={SignIn} />
            <Route path="/">
                <Container>
               <SearchArea />
            </Container>
            <Container>
               <Category />
            </Container>
            </Route>
          </Switch>
        </Router>

        </div>
        <Footer />
      </Box>
  );
}

export default App;
