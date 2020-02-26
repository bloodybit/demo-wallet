import React, { FunctionComponent, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Button, InputBase, LinearProgress, Typography, makeStyles } from '@material-ui/core';
import { Account } from '../lib';

const useStyles = makeStyles(theme => ({
  login: {
    display: "grid",
    margin: "auto",
    width: "fit-content",
    marginTop: 40,
  },
  error: {
    color: theme.palette.error.main,
  },
  marginTop: {
    marginTop: 15,
  }
}))


const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const timeout = (time:number) =>{
    return new Promise((resolve, _) => setTimeout(() => resolve(new Error('timeout')), time))
  }
  const login = async () => {
    setLoading(true);
    setError(false);

    try{
      // await timeout(2000); // fake timeout to simulate login
    } catch (e) {
      // this won't ever happen
    } finally {
      if(username === process.env.REACT_APP_USER_MAIL &&
          password === process.env.REACT_APP_USER_PASSWORD
      ) {
        const account = Account.getAccount("");
        localStorage.setItem(`account`, JSON.stringify(account))
        history.push("/account");
      } else{
        setError(true);
      }
      setLoading(false);
    }
  }

  const onKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      login()
    }
  }


  return (
    <div>
      <Typography align="center" variant="h6">
        Log  in
      </Typography>
      <div className={classes.login}>
        <div className={classes.marginTop}>
          <InputBase
            placeholder="username"
            value={username}
            onChange={ (e: any) => {setUsername(e.target.value)}}
            disabled={loading}
          />
        </div>
        <div className={classes.marginTop}>
          <InputBase
            placeholder="password"
            value={password}
            onKeyDown={onKeyDown}
            onChange={ (e: any) => {setPassword(e.target.value)}}
            disabled={loading}
            type="password"
          />
        </div>
        {  loading && <LinearProgress />}
        <div className={classes.marginTop}>
          <Button color="primary" variant="contained" onClick={login}>
            <span>Login</span>
          </Button>
        </div>
        {error && <Typography className={classes.error}>
          Wrong credentials
        </Typography>}
      </div>
    </div>
  )
}

export default Login;