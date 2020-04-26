import React from "react";
import Header from "../../Common/Header/";
import Table from "./Table";
import useStyles from "./store/Assets";
import { Grid } from "@material-ui/core";
function Attendance() {
  const classes = useStyles();
  return (
    <>
      <Header Header="Attendance"></Header>
      <Grid container spacing={3} className={classes.root}>
        <Table />
      </Grid>
    </>
  );
}

export default Attendance;
