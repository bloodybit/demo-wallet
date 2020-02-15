import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from "./components";
import ProtectedRoute from './router/protected-route';
import './App.css';
import { AccountView, Home, Login, NoMatch } from './pages';
import { Account } from './lib';

function App() {
  const acc  = null;
  return (
    <div>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          
          <ProtectedRoute path={"/account"} account={acc}>
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
