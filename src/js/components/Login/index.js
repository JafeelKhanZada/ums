import React, { useState } from "react";
import {
  Grid,
  FormControl,
  InputAdornment,
  Input,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as Action from "../../redux/actions";
function Login() {
  const classes = style();
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const { register, handleSubmit, errors, setError } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const onSubmit = (data) => {
    setDisable(true);
    dispatch(Action.login(data)).then(res => {
      if (!res) {
        setError("email");
        setError("password");
      }
      setDisable(false)
    })
  };
  return (
    <Grid container className={classes.Containers}>
      <Grid item xs={12} sm={12} md={4} className={classes.Login}>
        <img src="./logo.png" className={classes.logo} alt="img" />
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <FormControl
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            <Input
              disableUnderline
              placeholder="EMAIL"
              label="Email"
              className={classes.inputContainer}
              id="input-with-icon-adornment"
              name="email"
              style={{
                borderBottomColor: errors.email ? "red" : "white",
              }}
              inputRef={register({ required: true, message: "Please Enter Your Email" })}
              startAdornment={
                <InputAdornment position="start">
                  <i
                    style={{
                      color: errors.email ? "red" : "white",
                      fontSize: 18,
                      paddingRight: 5,
                      transition: "all 1s",
                    }}
                    className="flaticon-user"
                  />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Input
              disableUnderline
              placeholder="PASSWORD"
              type="password"
              name="password"
              label="Password"
              inputRef={register({ required: true })}
              className={classes.inputContainer}
              id="input-with-icon-adornment"
              style={{
                borderBottomColor: errors.password ? "red" : "white",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <i
                    style={{
                      color: errors.password ? "red" : "white",
                      fontSize: 18,
                      paddingRight: 5,
                      transition: "all 1s",

                    }}
                    className="flaticon-lock"
                  />
                </InputAdornment>
              }
            />
          </FormControl>
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Typography className={classes.forget} variant="outline">
              Forget Password?
            </Typography>
          </div>
          <Button
            className={[classes.button, disable === true ? classes.disable : ""]}
            variant="contained"
            disabled={disable}
            type="submit"
          >
            LOGIN
          </Button>
        </form>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80%",
            marginTop: 30,
          }}
        >
          <hr style={{ width: "40%", borderBottom: 1 }} />
          <Typography className={classes.or} variant="outline">
            or
          </Typography>
          <hr style={{ width: "40%", borderBottom: 1 }} />
        </div>
        <Button className={classes.button1}>
          <img src="./google.png" style={{ marginRight: 15 }} alt="img" />
          Continue With Google
        </Button>
      </Grid>
      <Grid item xs={12} sm={12} md={8} style={{ minHeight: "100vh" }}>
        <img style={{ width: "100%", height: "100vh" }} src="./slider.png" alt="img" />
      </Grid>
    </Grid>
  );
}
const style = makeStyles((theme) => ({
  Containers: {
    maxHeight: "100vh",
    overflow: "hidden",

  },
  Login: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: theme.palette.primary.main,
    background: `linear-gradient(to bottom, rgba(30,87,153,0) 0%,rgba(17,52,50,1) 100%)`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  logo: {
    width: 120,
    marginBottom: 70,
  },
  inputContainer: {
    width: "80%",
    backgroundColor: "transparent",
    color: "white",
    borderBottom: 1,
    borderBottomColor: "white",
    borderBottomStyle: "solid",
    fontFamily: theme.palette.text.fontFamily,
    padding: 3,
    fontSize: 13,
    paddingLeft: 0,
    transition: "all 1s",
    "&::placeholder": {
      color: "white",
    },
  },
  forget: {
    fontFamily: theme.palette.text.fontFamily,
    fontSize: 8,
    color: "white",
    letterSpacing: 1,
    opacity: 0.8,
    marginTop: 8,
  },
  or: {
    fontFamily: theme.palette.text.fontFamily,
    fontSize: 14,
    color: "white",
    letterSpacing: 1,
    opacity: 0.8,
    marginTop: 8,
  },
  button: {
    color: "white",
    width: "80%",
    backgroundColor: theme.palette.secondary.main,
    fontFamily: theme.palette.text.fontFamily,
    marginTop: 50,
    paddingTop: 10,
    paddingBottom: 10,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      filter: "brightness(110%)",
    },
  },
  button1: {
    fontSize: 10,
    color: "white",
    width: "80%",
    fontFamily: theme.palette.text.fontFamily,
    marginTop: 50,
    paddingTop: 10,
    paddingBottom: 10,
  },
  disable: {
    backgroundColor: "lightgrey",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default Login;
