import React from "react";
import Router from "./App.router";
import { ThemeProvider } from "@material-ui/core/styles";
import * as Theme from "./util/Theme";
function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={Theme.Light}>
        <Router />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
