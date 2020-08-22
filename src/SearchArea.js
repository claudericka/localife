import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flex: 1,
  },
  searchForm: {
  display: 'flex',
  flexWrap: 'wrap',
  },
  searchWrap: {
  flex: 1,
  }
}));

export default function SearchArea() {
  const classes = useStyles();

  return (
  <Container maxWidth="lg">
    <div className={classes.root}>
      <div className={classes.searchWrap}>
      <div>
         <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Découvrez et réservez vos produits et services locaux
            </Typography>
          </div>
          <div className={classes.searchForm}>
        <TextField
          label="Quoi"
          id="margin-normal"
          margin="normal"
          defaultValue="Traiteur, coiffeur, photographe ..."
          className={classes.textField}
          style={{ marginLeft: 8 }}
        />
        <TextField
          label="Où"
          id="margin-normal"
          defaultValue="A proximité, adresse"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          label="Quand"
          id="margin-normal"
          defaultValue="A tout moment"
          className={classes.textField}
          margin="normal"
        />
        <Button
        variant="contained"
        color="primary"
        className={classes.textField}>
              Rechercher
            </Button>
            </div>
            </div>
    </div>
    </Container>
  );
}
