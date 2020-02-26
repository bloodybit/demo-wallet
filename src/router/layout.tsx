import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AccountView, Home, Login, NoMatch } from '../pages';
import { Header } from '../components';
import { ProtectedRoute } from '.';
import { Account } from '../lib';


const Layout = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      
        <ProtectedRoute path={"/account"}>
          <AccountView />
        </ProtectedRoute>

        <Route >
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  )
}

export default Layout;