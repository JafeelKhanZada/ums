import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
function Loader() {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Skeleton
        animation="wave"
        variant="circle"
        className={classes.circle}
        width={100}
        height={100}
      />
      <Skeleton animation="wave" variant="rect" className={classes.input} />
      <Skeleton animation="wave" variant="rect" className={classes.input} />
      <div className={classes.forget}>
        <Skeleton
          animation="wave"
          variant="rect"
          className={classes.forgetPassword}
        />
      </div>
      <Skeleton animation="wave" variant="rect" className={classes.btn} />
      <div className={classes.or}>
        <Skeleton animation="wave" variant="rect" className={classes.bar} />
        <Skeleton animation="wave" variant="rect" className={classes.orsk} />
        <Skeleton animation="wave" variant="text" className={classes.bar} />
      </div>
    </div>
  );
}
const useStyle = makeStyles((theme) => ({
  circle: {
    marginBottom: 40,
  },
  container: {
    display: "flex",
    width: "30%",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  input: {
    width: "90%",
    height: "35px",
    marginTop: "30px",
  },
  forget: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  forgetPassword: {
    width: 100,
    height: 15,
  },
  btn: {
    width: "90%",
    height: 45,
    marginTop: 50,
  },
  or: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  bar: {
    width: "35%",
    height: 5,
  },
  orsk: {
    width: "10%",
    height: 15,
  },
}));
export default Loader;
