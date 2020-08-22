import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from './Header';
import SearchArea from './SearchArea';
import Category from './Category';
import { makeStyles } from '@material-ui/core/styles';

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
            <Container>
               <SearchArea />
            </Container>
            <Container>
               <Category />
            </Container>
        </div>
      </Box>
  );
}

export default App;
