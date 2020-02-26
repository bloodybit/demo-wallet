import React from 'react';
import { Layout } from "./router";
import './App.css';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  '@global': {
    body: {
      fontFamily: '"NB-International", "Roboto", "Helvetica", sans-serif',
    },
    '#root': {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    '@keyframes pulse': {
      '0%': {
        transform: 'scale(0.5)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
  },
  padded: {
    padding: 25,
  }
})

function App() {
  const classes = useStyles()

  return (
    <div className={classes.padded}>
      <Layout />
    </div>
  );
}

export default App;
