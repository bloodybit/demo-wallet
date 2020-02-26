import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { AccountContext } from '../lib';
import { Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=> ({
  chart: {
    width: "80%",
    margin: "auto",
  },
  splitView: {
    height: "80vh",
  },
  tables: {
    marginTop: "5%",
    marginBottom: 0,
    height: "50vh",
    overflow: "overlay",
  },

  cicle: {
    [theme.breakpoints.down(600)]: {
      margin: "auto",
    },
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    width: 50,
    height: 50,
    display: "table",
  },
  floatRight: {
    [theme.breakpoints.down(600)]: {
      float: "inherit",
      display: "inline-grid",
      margin: "auto",
      width: "100%",
    },
    float: "right",
    display: "flex",
    marginTop: -40,
    marginRight: 20
  },
  accountLogo:{
    textAlign: "center",
    display: "table-cell",
    verticalAlign: "middle",
  }
}));


const Logout = () => {
  const classes = useStyles()
  const account = useContext(AccountContext)!;
  const history = useHistory();


  const logout = () =>  {
    localStorage.removeItem("account");
    history.push('/')
  }

  return <>
    { account && 
      <div className={classes.floatRight}>
        <Button onClick={logout}>
          Logout
        </Button>
        <div className={classes.cicle}>
      <Typography variant="subtitle1" className={classes.accountLogo}>
        A
        </Typography>
    </div>
      </div>
    }</>
}

export default Logout;