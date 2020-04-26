import React from "react";
import Header from "../../Common/Header/";
import Table from "./Table";
import Enroll from "./EnroolTable";
import useStyles from "./store/Assets";
import { Grid } from "@material-ui/core";
function AddCourse() {
  const classes = useStyles();
  return (
    <>
      <Header Header="Add/Drop Course"></Header>
      <Grid container spacing={3} className={classes.root}>
        <Enroll />
        <Table />
      </Grid>
    </>
  );
}

export default AddCourse;
