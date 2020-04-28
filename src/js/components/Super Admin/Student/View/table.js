import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import * as Action from "./store/action";
import List from "../../../Common/Action";
import Table from "../../../Common/Table";
import moment from "moment";
function Tables(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(1);
  const [current, setCurrentPage] = useState(1);
  const value = useSelector(({ Student }) => Student);
  useEffect(() => {
    if (value.table) {
      setData(value.table);
    }
    if (value.pageSize) {
      setPageSize(value.pageSize);
    }
  }, [value]);
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
            Student
          </Typography>
        </div>
        <Table
          columns={columns}
          data={data}
          pages={pageSize}
          loading={loading}
          onFetchData={(state, instance) => {
            setLoading(true);
            setCurrentPage(state.page);
            dispatch(Action.getStudent(state.page, 10)).then(() => {
              setLoading(false);
            });
          }}
        />
      </Paper>
    </Grid>
  );
}
export default Tables;
const columns = [
  {
    Header: "Name",
    Cell: (row) => `${row?.original?.first_name} ${row?.original.last_name}`,
    className: "font-bold",
    width: 200,
  },
  {
    Header: "Gender",
    accessor: "gender",
    className: "text-center",
    headerClassName: "text-center",
  },

  {
    Header: "City",
    accessor: "city",
    className: "text-center",
    headerClassName: "text-center",
  },
  {
    Header: "DOB",
    Cell: (row) => moment(row?.original?.dob).format("DD, MMM YYYY"),
    className: "text-center",
    headerClassName: "text-center",
  },
  {
    Header: "Admission Date",
    Cell: (row) => moment(row?.original?.admissionDate).format("DD, MMM YYYY"),
    className: "text-center",
    headerClassName: "text-center",
  },
  {
    Header: "Batch",
    Cell: (row) => row?.original?.batch?.batchName,
    className: "text-center",
    headerClassName: "text-center",
  },
  {
    Header: "Program",
    Cell: (row) => row?.original?.batch?.program?.name,
    className: "text-center",
    headerClassName: "text-center",
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
      </List>
    ),
  },
];
