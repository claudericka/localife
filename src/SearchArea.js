import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  searchForm: {
  display: 'flex',
  flexWrap: 'wrap',
  }
}));

export default function SearchArea() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
      <div>
        <Typography variant="h6" noWrap>
            Découvrez et réservez des services et produits locaux
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
  );
}
