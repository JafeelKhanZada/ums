import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { withReducer } from "../../../../redux/withReducer";
import Reducer from "../Store/reducer";
import Header from "../../../Common/Header";
import useStyle from "../Store/Assets/AddCourse";
import Table from "./table";
import * as Action from "../Store/action";
import { useDispatch } from "react-redux";
function View() {
  const style = useStyle();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.getCourse());
  }, []);
  return (
    <React.Fragment>
      <Header></Header>
      <Grid container spacing={3} className={style.container}>
        <Table />
      </Grid>
    </React.Fragment>
  );
}
export default withReducer("Course", Reducer)(View);
