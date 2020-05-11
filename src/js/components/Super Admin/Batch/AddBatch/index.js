import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Header from "../../../Common/Header";
import useStyle from "./store/Assets/index.js";
import { withReducer } from "../../../../redux/withReducer";
import * as Action from "./store/action";
import { useDispatch } from "react-redux";
import Reducer from "./store/reducer";
import Form from "./form";
function Admin() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.getDepartment());
  }, []);
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
export default withReducer("Batch", Reducer)(Admin);