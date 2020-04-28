import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  FormControl,
  TextField,
  Paper,
  Grid,
  Button,
  CircularProgress,
} from "@material-ui/core";
import * as Action from "./store/action";
import useStyle from "./store/Assets";
function Forms() {
  const dispatch = useDispatch();
  const classes = useStyle();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const onSubmit = (values) => {
    setLoading(true);
    dispatch(Action.postDepartmentInDepartment(values)).then((res) => {
      if (res) {
        reset();
      }
      setLoading(false);
    });
  };

  const hasError = (inputName) => !!(errors && errors[inputName]);
  return (
    <Grid xs={12}>
      <Paper evelation={3}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.formContainer}
        >
          <Grid container justify="space-between" spacing={3}>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  inputRef={register({ required: true })}
                  name="name"
                  label="Name"
                  placeholder="Enter Program Name Here..."
                  helperText={hasError("name") && `Name is mandatory`}
                  error={hasError("name")}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  inputRef={register({
                    required: true,
                  })}
                  name="fees"
                  label="Fees"
                  type="number"
                  helperText={hasError("fees") && `Fees is mandatory`}
                  error={hasError("fees")}
                  placeholder="Enter Fees Here..."
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  inputRef={register({
                    required: true,
                  })}
                  name="semester"
                  label="Semester"
                  placeholder="Enter Semester Here..."
                  helperText={hasError("semester") && `Semester is mandatory`}
                  error={hasError("semester")}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  inputRef={register({
                    required: true,
                    message: "Enter Duration Please!",
                  })}
                  name="duration"
                  label="Duration"
                  placeholder="Enter Duration Here..."
                  helperText={hasError("duration") && `Duration is mandatory`}
                  error={hasError("duration")}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  inputRef={register({
                    required: true,
                  })}
                  name="credit_hours"
                  label="Total Credit Hours"
                  placeholder="Enter Total Credit Hours Here..."
                  helperText={
                    hasError("credit_hours") && `Credit Hour is mandatory`
                  }
                  error={hasError("credit_hours")}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>

            <Grid xs={12}>
              <Button
                style={{
                  width: "100%",
                  padding: "15px",
                  marginTop: 50,
                  fontWeight: "bold",
                }}
                type="submit"
                color={"primary"}
                variant="contained"
              >
                {loading === true ? (
                  <CircularProgress size={14} />
                ) : (
                  "Add Department"
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}

export default Forms;
