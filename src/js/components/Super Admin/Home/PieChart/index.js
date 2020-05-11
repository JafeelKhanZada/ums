import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import useStyle from "../store/Assets/";
import { Doughnut } from "react-chartjs-2";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
const Statistic = () => {
  const theme = useTheme();
  const classes = useStyle();
  const [data, setData] = useState(null);
  const value = useSelector(({ Home }) => Home);
  useEffect(() => {
    if (value?.data) {
      setData(value?.data);
    }
  }, [value]);
  const state = {
    Data: {
      labels: ["Teacher", "Employees", "Admins"],
      datasets: [
        {
          data: [data?.TEACHER, data?.EMPLOYEE, data?.ADMIN],
          backgroundColor: ["#11CDEF", "#2DCE98", "#3C83F5"],
        },
      ],
    },
  };
  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={1} className={classes.Attendance_paper}>
          <div className={classes.Attendance_paper_div}>
            <Typography
              className={classes.Attendance_paper_heading1}
              variant="outline"
            >
              OVERVIEW
            </Typography>
            <Typography
              className={classes.Attendance_paper_heading2}
              variant="h6"
            >
              UMS
            </Typography>
          </div>
          <Doughnut
            options={{
              legend: {
                display: true,
                padding: 10,
                labels: {
                  fontFamily: theme.palette.text.fontFamily,
                  boxWidth: 20,
                  fontColor: theme.palette.text.subHead,
                },
                layout: {
                  padding: {
                    left: 0,
                    right: 0,
                    top: 100,
                    bottom: 0,
                  },
                },
              },
            }}
            height={220}
            data={state.Data}
          />
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default Statistic;
