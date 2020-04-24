import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Table from "../../../Common/Table";
import useStyle from "../store/Assets/Home";
function Fees(props) {
  const classes = useStyle();
  return (
    <Grid item xs={12} sm={12} md={6}>
      <Paper className={classes.Student_fee_heading} elevation={1}>
        <div className={classes.Student_fee_heading_div}>
          <Typography
            className={classes.Student_fee_heading_div_typo1}
            variant="outline"
          >
            OVERVIEW
          </Typography>
          <Typography
            className={classes.Student_fee_heading_div_typ2}
            variant="h6"
          >
            Student Fees
          </Typography>
        </div>
        <Table columns={columns} data={[]} />
      </Paper>
      <Paper className={classes.Student_fee_second_div} elevation={1}>
        <div className={classes.Student_fee_second_div_main_div}>
          <Typography
            className={classes.Student_fee_second_div_main_div_typo1}
            variant="outline"
          >
            IMPORTANT
          </Typography>
          <Typography
            className={classes.Student_fee_second_div_main_div_typo2}
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
                className={classes.Student_fee_second_div_main_div_content1_h}
              >
                Fees Calculation :
              </Typography>
            </div>
            <Typography
              variant="subtitle2"
              className={classes.Student_fee_second_div_main_div_content1_p}
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
                className={classes.Student_fee_second_div_main_div_content2_h}
              >
                Fees Calculation : (In case of repeat course)
              </Typography>
            </div>
            <Typography
              variant="subtitle2"
              className={classes.Student_fee_second_div_main_div_content2_p}
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
