import React, {FunctionComponent, useContext} from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';

import { Account, AccountProvider, AccountContext} from '../lib';

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
  }
}))

export type HeaderProps = {
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  
  const account = useContext(AccountContext);
  
  
  return <div>
      <Typography variant="h1" align="center">Balance app</Typography>
    </div>
};

export default Header;