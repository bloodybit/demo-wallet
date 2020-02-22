import React, {FunctionComponent} from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { Account } from '../lib';

const useStyles = makeStyles((theme)=> ({
  center: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "fit-content",
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
}))

export type HeaderProps = {
  account: Account | null,
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  
  const logout = () =>  {
    localStorage.removeItem("account");
    history.push('/')
  }
  return <div>
      <Typography variant="h1" align="center">Balance app</Typography>
      {props.account &&
        <div className={classes.floatRight}>
          <Button onClick={logout}>
            Logout
          </Button>
          <div className={classes.cicle}>
            <Typography variant="subtitle1" className={classes.accountLogo}>
              A
              </Typography>
        </div>
      </div>}
    </div>
};

export default Header;