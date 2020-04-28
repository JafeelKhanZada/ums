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
import * as Action from "../Store/action";
import List from "../../../Common/Action";
import Table from "../../../Common/Table";
function Tables(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(1);
  const [current, setCurrentPage] = useState(1);
  const value = useSelector(({ Course }) => Course);
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
            Courses
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
            dispatch(Action.getCourse(state.page, 10)).then(() => {
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
    accessor: "NAME",
    className: "font-bold",
    width: 200,
  },
  {
    Header: "Credit Hours",
    accessor: "CREDITHOURS",
    className: "text-center",
    headerClassName: "text-center",
  },

  {
    Header: "Course Code",
    accessor: "CODE",
    className: "text-center",
    headerClassName: "text-center",
  },
  {
    Header: "Lab",
    Cell: (row) => (row?.original?.IS_LAB === 1 ? "Yes" : "No"),
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
