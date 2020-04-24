import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Table from "../../../Common/Table";
function Enroll(props) {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={12} md={8} style={{ marginTop: theme.spacing(3) }}>
      <Paper
        style={{
          paddingTop: theme.spacing(3),
          paddingBottom: theme.spacing(3),
          borderRadius: 12,
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
            Enrolled Courses
          </Typography>
        </div>
        <Table columns={columns} data={[]} />
      </Paper>
    </Grid>
  );
}
export default Enroll;
const columns = [
  {
    Header: "Course Name",
    accessor: "CompanyName",
    className: "font-bold",
    width: 200,
  },
  {
    Header: "Section",
    accessor: "UserName",
    width: 120,
  },

  {
    Header: "Credit Hour",
    accessor: "WorkEmail",
    width: 120,
  },
  {
    Header: "Instructor",
    accessor: "ApprovedBy",
    width: 120,
  },
  {
    Header: "Completion",
    accessor: "CreatedDate",
  },
];
