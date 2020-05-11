import React from "react";
import { Grid } from "@material-ui/core";
import Reducer from "./store/reducer/";
import Header from "../../Common/Header";
import Card from "../../Common/Card";
import useStyle from "./store/Assets/";
import { withReducer } from "../../../redux/withReducer";
function Student() {
  const style = useStyle();
  return (
    <React.Fragment>
      <Header>
        <Card
          head="Payment Dues"
          value="0.00Rs"
          icon="dollar"
          b1="+3.48%"
          b2="Last Semester"
          color="#7764E4"
        />
        <Card
          head="Completed Courses"
          value="10"
          icon="college-graduation"
          b1="+12%"
          b2="Whole Course"
          color="#3C83F5"
        />
        <Card
          head="Pending Assignment"
          value="10"
          icon="briefcase"
          b1="+12:00 PM"
          b2="Due Date"
          color="#2DCE98"
        />
        <Card
          head="CGPA"
          value="3,65"
          icon="music-black-vertical-bars"
          b1="+1.5%"
          b2="Last Semester"
          color="#11CDEF"
        />
      </Header>
      <Grid container spacing={3} className={style.container}></Grid>
    </React.Fragment>
  );
}
export default withReducer("Admin", Reducer)(Student);
