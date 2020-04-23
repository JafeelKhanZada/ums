import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Table from "../../Common/Table";
function Fees(props) {
  const theme = useTheme();
  const classes = useStyle();
  return (
    <Grid item xs={12} sm={12} md={6}>
      <Paper
        style={{
          paddingTop: theme.spacing(3),
          borderRadius: 12,
          overflow: "hidden",
        }}
        elevation={1}
      >
        <div
          style={{
            paddingLeft: theme.spacing(2),
            paddingBottom: theme.spacing(3),
          }}
        >
          <Typography
            style={{ color: "#8898AA", fontSize: 9 }}
            variant="outline"
          >
            OVERVIEW
          </Typography>
          <Typography
            style={{ fontWeight: 700, fontFamily: "Poppins" }}
            variant="h6"
          >
            Student Fees
          </Typography>
        </div>
        <Table columns={columns} data={[]} />
      </Paper>
      <Paper
        style={{
          marginTop: 10,
          paddingTop: theme.spacing(1),
          borderRadius: 12,
          overflow: "hidden",
        }}
        elevation={1}
      >
        <div
          style={{
            paddingLeft: theme.spacing(3),
            paddingBottom: theme.spacing(2),
          }}
        >
          <Typography
            style={{ color: "#8898AA", fontSize: 9 }}
            variant="outline"
          >
            IMPORTANT
          </Typography>
          <Typography
            style={{ fontWeight: 700, fontFamily: "Poppins" }}
            variant="h6"
          >
            Notes
          </Typography>
        </div>
        <div className={classes.root}>
          <div className={classes.Inner}>
            <div className={classes.InnerContent}>
              <div className={classes.bullet}></div>
              <Typography
                variant="subtitle2"
                style={{
                  fontWeight: 700,
                  color: "#8898AA",
                  fontFamily: "Poppins",
                  marginLeft: 10,
                }}
              >
                Fees Calculation :
              </Typography>
            </div>
            <Typography
              variant="subtitle2"
              style={{
                fontWeight: 600,
                color: theme.palette.attendance.danger,
                fontFamily: "Poppins",
                marginLeft: 20,
                fontSize: 12,
              }}
            >
              (Misc fee per course * No. of Enrolled courses) + (Per course
              after discount fee * No. of courses)
            </Typography>
          </div>
          <div className={classes.Inner}>
            <div className={classes.InnerContent}>
              <div className={classes.bullet}></div>
              <Typography
                variant="subtitle2"
                style={{
                  fontWeight: 700,
                  color: "#8898AA",
                  fontFamily: "Poppins",
                  marginLeft: 10,
                }}
              >
                Fees Calculation : (In case of repeat course)
              </Typography>
            </div>
            <Typography
              variant="subtitle2"
              style={{
                fontWeight: 600,
                color: theme.palette.attendance.danger,
                fontFamily: "Poppins",
                marginLeft: 20,
                fontSize: 12,
              }}
            >
              (Misc fee per course * No. of courses) + (Per course WITHOUT
              discount fee * No. of courses)
            </Typography>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}
export default Fees;
const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  Inner: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  InnerContent: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  bullet: {
    width: 12,
    height: 12,
    backgroundColor: "black",
    borderRadius: "50%",
  },
}));
const columns = [
  {
    Header: "Fees Type",
    accessor: "CompanyName",
    className: "font-bold",
    width: 200,
  },
  {
    Header: "Total Fees",
    accessor: "UserName",
  },

  {
    Header: "Discount %",
    accessor: "WorkEmail",
  },
  {
    Header: "Per An/Cr/Se Fee",
    accessor: "ApprovedBy",
  },
];
