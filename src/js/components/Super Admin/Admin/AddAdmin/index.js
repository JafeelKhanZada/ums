import React, { useEffect } from "react";
import useStyle from "../store/Assets/";
import Form from "./Form";
import Header from "../../../Common/Header";
import Reducer from "../store/reducer";
import { Grid } from "@material-ui/core";
import { withReducer } from "../../../../redux/withReducer";
import { useDispatch, batch } from "react-redux";
import * as Action from "../store/action";
function Admin() {
  const dispatch = useDispatch();
  useEffect(() => {
    batch(() => {
      dispatch(Action.getEmployee());
      dispatch(Action.getRoles());
      dispatch(Action.getDepartmentDataInDepartment());
    });
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
export default withReducer("Admin", Reducer)(Admin);
