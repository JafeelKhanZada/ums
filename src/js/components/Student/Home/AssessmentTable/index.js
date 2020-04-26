import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Table from "../../../Common/Table";
function Enroll(props) {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={12} md={7}>
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
            Assessment
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
    width: 160,
  },
  {
    Header: "Out Of",
    accessor: "UserName",
    width: 100,
  },

  {
    Header: "Marks Earned",
    accessor: "WorkEmail",
    width: 100,
  },
  {
    Header: "Remaining",
    accessor: "ApprovedBy",
    width: 100,
  },
  {
    Header: "Completion",
    accessor: "CreatedDate",
  },
];
