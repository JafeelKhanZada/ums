import React from "react";
import useStyle from "../store/assets/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Nav from "../Nav/";
// import BreadCrumbs from "../Breadcrumbs/";
import { Grid, Typography } from "@material-ui/core";
function Header(props) {
  const classes = useStyle();
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container className={classes.container}>
        <Nav />
        <Grid item xs={12}>
          <Typography className={classes.Heading} variant="h5">
            Home
          </Typography>
        </Grid>
        {props.children}
        {/* <BreadCrumbs /> */}
      </Grid>
    </React.Fragment>
  );
}

export default Header;
