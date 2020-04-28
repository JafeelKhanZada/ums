import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Header from "../../../Common/Header";
import useStyle from "./store/Assets/index.js";
import { useDispatch } from "react-redux";
import * as Action from "./store/action";
import Reducer from "./store/reducer";
import { withReducer } from "../../../../redux/withReducer";
import Table from "./table";
function Admin() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.getBatch());
  }, []);
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
export default withReducer("Batch", Reducer)(Admin);
