import React from "react";
import { Grid } from "@material-ui/core";
import Header from "../../../Common/Header";
import useStyle from "./store/Assets/index.js";
import Form from "./form";
function Admin() {
  const style = useStyle();
  return (
    <React.Fragment>
      <Header></Header>
      <Grid container spacing={3} className={style.container}>
        <Form />
      </Grid>
    </React.Fragment>
  );
}
export default Admin;
