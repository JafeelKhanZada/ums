import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Table from "../../../Common/Table";
import moment from "moment";
function Tables(props) {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const state = useSelector((state) => state.Batch);
  useEffect(() => {
    if (state.table) {
      setData(state.table);
    }
    setLoader(state.loader);
  }, [state]);
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
            Batch
          </Typography>
        </div>
        <Table columns={columns} data={data} loader={loader} />
      </Paper>
    </Grid>
  );
}
export default Tables;
const columns = [
  {
    Header: "Name",
    accessor: "batchName",
    className: "font-bold text-center",
    width: 250,
  },
  {
    Header: "Total Enrooled",
    accessor: "totalEnrolled",
  },

  {
    Header: "Start Date",
    Cell: (row) => moment(row?.original?.startDate).format("DD, MMM YYYY"),
  },
  {
    Header: "End Date",
    Cell: (row) => moment(row?.original?.endDate).format("DD, MMM YYYY"),
  },
  {
    Header: "Total Pass Out",
    accessor: "totalPass",
  },
  {
    Header: "Program Name",
    Cell: (row) => row?.original?.program?.name,
  },
];
