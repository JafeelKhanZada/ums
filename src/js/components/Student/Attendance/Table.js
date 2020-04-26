import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Table from "../../Common/Table";
function Tables(props) {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={12} md={12}>
      <Paper
        style={{
          paddingTop: theme.spacing(3),
          paddingBottom: theme.spacing(3),
          borderRadius: 12,
          height: "100%",
        }}
        elevation={1}
      >
        <div
          style={{
            paddingLeft: theme.spacing(2),
            paddingBottom: theme.spacing(3),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
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
            Attendance
          </Typography>
        </div>
        <Table columns={columns} data={[]} />
      </Paper>
    </Grid>
  );
}
export default Tables;
const columns = [
  {
    Header: "Course Name",
    accessor: "CompanyName",
    className: "font-bold",
    width: 250,
  },
  {
    Header: "Section",
    accessor: "UserName",
    width: 130,
  },

  {
    Header: "Credit Hour",
    accessor: "WorkEmail",
    width: 130,
  },
  {
    Header: "Instructor",
    accessor: "ApprovedBy",
    width: 130,
  },
  {
    Header: "Action",
    accessor: "ApprovedBy",
    width: 130,
  },
  {
    Header: "Completion",
    accessor: "CreatedDate",
  },
];
