import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { withReducer } from "../../../../redux/withReducer";
import * as Action from "./store/action";
import Header from "../../../Common/Header";
import useStyle from "./store/Assets/index.js";
import Reducer from "./store/reducer";
import Form from "./form";
function Student() {
  const style = useStyle();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.getProgram());
  }, []);
  return (
    <React.Fragment>
      <Header></Header>
      <Grid container spacing={3} className={style.container}>
        <Form />
      </Grid>
    </React.Fragment>
  );
}
export default withReducer("Employee", Reducer)(Student);