import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  noDecorator: {
    textDecoration: "none",
  }
})
const Home = () => {
  const classes = useStyles()
  return (<div>
    <Typography variant="h6">
        Welcome to the home page!
    </Typography>
    <Link to="/login" className={classes.noDecorator}>
      <Button color="primary" variant="contained">
        <span>Login</span>
      </Button>
    </Link>
  </div>
  );
}

export default Home;