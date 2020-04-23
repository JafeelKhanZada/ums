import React, { useState, useEffect } from "react";
import Router from "./App.router";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Snackbar } from "@material-ui/core";
import * as Theme from "./util/Theme";
import { Alert } from "@material-ui/lab";
import CheckIcon from "@material-ui/icons/Check";
import { useSelector } from "react-redux";
import "./Styles.scss";
function App() {
  const classes = useStyles();
  const data = useSelector((state) => state);
  const [State, setState] = useState({
    show: false,
    message: "",
    type: "",
  });
  useEffect(() => {
    setState(data.Common);
    setTimeout(() => {
      setState({ ...State, show: false });
    }, 2000);
  }, [data]);
  return (
    <React.Fragment>
      <ThemeProvider theme={Theme.Light}>
        <Router />
      </ThemeProvider>
      <div className={classes.root}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={State.show}
          autoHideDuration={1000}
        >
          <Alert icon={<CheckIcon fontSize="inherit" />} severity={State.type}>
            {State.message}
          </Alert>
        </Snackbar>
      </div>
    </React.Fragment>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
export default App;
