import React, { useState, useEffect } from "react";
import useStyle from "../store/assets/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Nav from "../Nav/";
import { useLocation } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
function Header(props) {
  const classes = useStyle();
  const path = useLocation().pathname;
  const [header, setHeader] = useState(null);
  useEffect(() => {
    if (path) {
      const value = path.split("/");
      const pathname = value[1].split("-");
      let title = "";
      pathname.map((v, k) => {
        title += v + " ";
      });
      console.log(title);
      setHeader(title);
    }
  }, [path]);
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container className={classes.container}>
        <Nav />
        <Grid item xs={12}>
          <Typography className={classes.Heading} variant="h5">
            {header}
          </Typography>
        </Grid>
        {props.children}
        {/* <BreadCrumbs /> */}
      </Grid>
    </React.Fragment>
  );
}

export default Header;
