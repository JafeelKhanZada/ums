import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useStyle from "../store/Assets/Home";
import { Bar } from "react-chartjs-2";
import { Grid, Paper, Typography } from "@material-ui/core";
const data = [90, 75, 50, 90, 100];
const Statistic = () => {
  const theme = useTheme();
  const classes= useStyle();
  const state = {
    Data: {
      labels: ["SE", "CA", "ADV COP", "WEB APP", "DATABASE"],
      datasets: [
        {
          data: data,
          backgroundColor: [
            data[0] >= 80
              ? theme.palette.attendance.success
              : data[0] < 80 && data[0] > 50
              ? theme.palette.attendance.warning
              : data[0] < 50
              ? theme.palette.attendance.danger
              : theme.palette.attendance.danger,
            data[1] >= 80
              ? theme.palette.attendance.success
              : data[1] < 80 && data[1] > 50
              ? theme.palette.attendance.warning
              : data[1] < 50
              ? theme.palette.attendance.danger
              : theme.palette.attendance.danger,
            data[2] >= 80
              ? theme.palette.attendance.success
              : data[2] < 80 && data[2] > 50
              ? theme.palette.attendance.warning
              : data[2] < 50
              ? theme.palette.attendance.danger
              : theme.palette.attendance.danger,
            data[3] >= 80
              ? theme.palette.attendance.success
              : data[3] < 80 && data[3] > 50
              ? theme.palette.attendance.warning
              : data[3] < 50
              ? theme.palette.attendance.danger
              : theme.palette.attendance.danger,
            data[4] >= 80 && data[4] > 50
              ? theme.palette.attendance.success
              : data[4] < 80
              ? theme.palette.attendance.warning
              : data[4] < 50
              ? theme.palette.attendance.danger
              : theme.palette.attendance.danger,
          ],
        },
      ],
    },
  };
  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={6}>
        <Paper
          elevation={1}
          className={classes.Attendance_paper}
        >
          <div
           className={classes.Attendance_paper_div}
          >
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
              Attendance
            </Typography>
          </div>
          <div className={classes.Attendance_Second_div} >
            <div className={classes.Attendance_Second_div_Align_div} >
              <div className={classes.Attendance_Second_div_Color_div} style={{backgroundColor: theme.palette.attendance.success}}/>
              <p className={classes.Attendance_Second_div_Color_div_p}>
                Safe
              </p>
            </div>
            <div className={classes.Attendance_Second_div_Align_div}>
              <div
                style={{
                  backgroundColor: theme.palette.attendance.warning,
                }}
                className={classes.Attendance_Second_div_Color_div}
              />
              <p className={classes.Attendance_Second_div_Color_div_p}>
                Warning
              </p>
            </div>
            <div className={classes.Attendance_Second_div_Align_div}>
              <div
                style={{
                  backgroundColor: theme.palette.attendance.danger,
                }}
                className={classes.Attendance_Second_div_Color_div}
              />
              <p className={classes.Attendance_Second_div_Color_div_p}>
                Drop
              </p>
            </div>
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
                    barPercentage: 0.8,
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
