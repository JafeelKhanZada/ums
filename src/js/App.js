import React, { useState } from "react";
import Router from "./App.router.super.admin";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Snackbar } from "@material-ui/core";
import * as Theme from "./util/Theme";
import { Alert } from "@material-ui/lab";
import CheckIcon from "@material-ui/icons/Check";
import "./Styles.scss";
function App() {
  const classes = useStyles();
  const [State, setState] = useState({
    show: false,
    message: "",
    type: "",
  });
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
