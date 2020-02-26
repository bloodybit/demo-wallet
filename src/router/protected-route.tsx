import React, { FunctionComponent } from 'react';
import { Route } from "react-router-dom";
import { Account, AccountProvider } from '../lib';

type ProtectedRouteProps = {
  path: string,
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = (props) => {
  return <Route path={props.path}>
    <AccountProvider>
      <div>{props.children}</div>
    </AccountProvider>
  </Route>
}

export default ProtectedRoute;