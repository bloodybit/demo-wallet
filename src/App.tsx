import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from "./components";
import ProtectedRoute from './router/protected-route';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { AccountView, Home, Login, NoMatch } from './pages';
import { Account } from './lib';


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
  let account = null;
  const storage = localStorage.getItem("account");
  if(storage) {
    let rawAccount = JSON.parse(storage);
    account = new Account(rawAccount.id, rawAccount.iban);
  }
  return (
    <div className={classes.padded}>
      <Router>
      <Header account={account}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          
          <ProtectedRoute path={"/account"} account={account}>
            <AccountView />
          </ProtectedRoute>

          <Route >
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
