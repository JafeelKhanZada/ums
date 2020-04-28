import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Header from "../../../Common/Header";
import useStyle from "./store/Assets/index.js";
import Reducer from "./store/reducer";
import Form from "./form";
import { withReducer } from "../../../../redux/withReducer";
import { useDispatch } from "react-redux";
import * as Action from "./store/action";
function Admin() {
  const style = useStyle();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.getBatch());
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
export default withReducer("Student", Reducer)(Admin);
