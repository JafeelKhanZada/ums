import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useStyle from "../store/Assets/Home";
import { Bar } from "react-chartjs-2";
import { Grid, Paper, Typography } from "@material-ui/core";
const data = [90, 75, 50, 90, 100];
const data1 = [57, 26, 70, 95, 80];
const Statistic = () => {
  const theme = useTheme();
  const classes = useStyle();
  const state = {
    Data: {
      labels: ["SE", "CA", "ADV COP", "WEB APP", "DATABASE"],
      datasets: [
        {
          data: data,
          backgroundColor: "#2DCE98",
        },
        {
          data: data1,
          backgroundColor: "#7764E4",
        },
      ],
    },
  };
  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={5}>
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
              Assessment
            </Typography>
          </div>
          <Bar
            options={{
              legend: {
                display: false,
                labels: {
                  fontFamily: theme.palette.text.fontFamily,
                  boxWidth: 20,
                  fontColor: theme.palette.text.subHead,
                  padding: 15,
                },
              },
              scales: {
                round: 5,
                xAxes: [
                  {
                    ticks: {
                      stepSize: 25,
                      fontSize: 10,
                      fontFamily: theme.palette.text.fontFamily,
                      color: theme.palette.text.subHead,
                      padding: 5,
                      fontStyle: "bold",
                    },
                    borderWidth: {
                      top: 1,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    },
                    barPercentage: 0.5,
                    gridLines: {
                      lineWidth: 0.5,
                      offsetGridLines: false,
                      drawBorder: false,
                    },
                  },
                ],
                yAxes: [
                  {
                    ticks: {
                      min: 0,
                      max: 100,
                      stepSize: 25,
                      fontSize: 10,
                      fontFamily: theme.palette.text.fontFamily,
                      color: theme.palette.text.subHead,
                      padding: 5,
                      fontStyle: "bold",
                    },
                    gridLines: {
                      lineWidth: 0.5,
                      drawBorder: false,
                      offsetGridLines: false,
                    },
                  },
                ],
              },
            }}
            height={203}
            data={state.Data}
          />
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default Statistic;
