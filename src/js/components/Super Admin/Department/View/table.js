import React, { useState, useEffect } from "react";
import {
  Grid, Paper, Typography,
  ListItemIcon,
  ListItemText,
  MenuItem
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import List from "../../../Common/Action";
import * as Action from "./store/action";
import Table from "../../../Common/Table";
function Tables(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const state = useSelector((state) => state.Department);
  useEffect(() => {
    if (state.table) {
      setData(state.table);
    }
    setLoader(state.loader);
  }, [state]);
  useEffect(() => {
    dispatch(Action.getDepartmentDataInDepartment());
  }, []);
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
            Department
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
    accessor: "NAME",
    width: 250,
  },
  {
    Header: "Total Fees",
    accessor: "TOTAL_FEES",
    className: "text-center",
    headerClassName: "text-center"
  },

  {
    Header: "Total Semester",
    accessor: "TOTAL_SEMESTER", className: "text-center",
    headerClassName: "text-center"
  },
  {
    Header: "Duration",
    accessor: "DURATION", className: "text-center",
    headerClassName: "text-center"
  },
  {
    Header: "Total Credit Hours",
    accessor: "TOTAL_CREDIT_HOURS", className: "text-center",
    headerClassName: "text-center"
  },
  {
    Header: "Actions",
    Cell: (row) => (
      <List style={{ padding: 0 }}>
        <MenuItem style={{ padding: "0 10px", outline: "none" }}>
          <ListItemIcon style={{ minWidth: "auto" }}>
            <DeleteOutlineOutlined />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </MenuItem>
      </List>)
  }
];
