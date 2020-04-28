import React, { useEffect } from "react";
import useStyle from "../Store/Assets/AddCourse";
import Form from "./Form";
import Header from "../../../Common/Header";
import Reducer from "../Store/reducer";
import { Grid } from "@material-ui/core";
import { withReducer } from "../../../../redux/withReducer";
import { useDispatch } from "react-redux";
// import * as Action from "./store/action";
function Admin() {
  const dispatch = useDispatch();
  const style = useStyle();
  return (
    <React.Fragment>
      <Header></Header>
      <Grid container spacing={3} className={style.container}>
        <Form />
      </Grid>
    </React.Fragment>
  );
}
export default withReducer("Department", Reducer)(Admin);
