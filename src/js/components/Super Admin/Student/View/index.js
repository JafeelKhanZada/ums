import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { withReducer } from "../../../../redux/withReducer";
import Reducer from "./store/reducer";
import Header from "../../../Common/Header";
import useStyle from "./store/Assets/index.js";
import Table from "./table";
function Student() {
  const style = useStyle();
  return (
    <React.Fragment>
      <Header></Header>
      <Grid container spacing={3} className={style.container}>
        <Table />
      </Grid>
    </React.Fragment>
  );
}
export default withReducer("Student", Reducer)(Student);
