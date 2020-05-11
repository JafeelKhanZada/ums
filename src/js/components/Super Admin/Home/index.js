import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { withReducer } from "../../../redux/withReducer";
import Header from "../../Common/Header";
import Card from "../../Common/Card";
import useStyle from "./store/Assets/index.js";
import * as Action from "./store/action";
import Reducer from "./store/reducer";
import Chart from "./PieChart/";
function Admin() {
  const value = useSelector(({ Home }) => Home);
  const dispatch = useDispatch();
  const style = useStyle();
  const [card, SetCard] = useState(null);
  useEffect(() => {
    dispatch(Action.getDashboardCard());
  }, []);
  useEffect(() => {
    if (value?.data) {
      SetCard(value?.data);
    }
  }, [value]);
  return (
    <React.Fragment>
      <Header>
        <Card
          head="Total Student"
          value={card?.STUDENT}
          icon="humanpictos"
          color="#F7DDB4"
        />
        <Card
          head="Total Admin"
          value={card?.ADMIN}
          icon="teamwork"
          color="#3C83F5"
        />
        <Card
          head="Total Employee"
          value={card?.EMPLOYEE}
          icon="workers-team"
          color="#2DCE98"
        />
        <Card
          head="Total Teacher"
          value={card?.TEACHER}
          icon="teacher"
          color="#11CDEF"
        />
      </Header>
      <Grid container spacing={3} className={style.container}>
        <Chart />
      </Grid>
    </React.Fragment>
  );
}
export default withReducer("Home", Reducer)(Admin);
