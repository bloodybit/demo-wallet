import React, { FunctionComponent, Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { Account } from '../lib';

type ProtectedRouteProps = {
  account: Account | null,
  path: string,
}
const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = (props) => {
  return <Route path={props.path}>
    {(props.account)? <div>{props.children}</div> : <Redirect to='/login'/>}
  </Route>
}

export default ProtectedRoute;