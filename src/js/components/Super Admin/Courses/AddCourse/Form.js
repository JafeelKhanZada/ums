import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  TextField,
  Paper,
  Grid,
  Button,
  CircularProgress,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import useStyle from "../Store/Assets/AddCourse";
import * as Action from "../Store/action";
function Forms() {
  const dispatch = useDispatch();
  const classes = useStyle();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors, reset, control } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const onSubmit = (values) => {
    setLoading(true);
    dispatch(
      Action.addCourse({
        ...values,
      })
    ).then((res) => {
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
                  name="NAME"
                  label="Course Name"
                  placeholder="Enter Course Name Here..."
                  inputRef={register({ required: true })}
                  helperText={hasError("NAME") && `Course Name is mandatory`}
                  error={hasError("NAME")}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  name="CREDITHOURS"
                  label="Credit Hours"
                  placeholder="Enter Credit Hours Here..."
                  inputRef={register({ required: true })}
                  type="number"
                  helperText={
                    hasError("CREDITHOURS") && `Credit Hours is mandatory`
                  }
                  error={hasError("CREDITHOURS")}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  name="CODE"
                  label="Course Code"
                  placeholder="Enter Course Code Here..."
                  inputRef={register({ required: true })}
                  helperText={hasError("CODE") && `Course Code is mandatory`}
                  error={hasError("CODE")}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                error={hasError("IS_LAB")}
                className={classes.formControl}
              >
                <InputLabel shrink className={classes.InputLabel}>
                  Lab?
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="IS_LAB"
                  as={
                    <RadioGroup
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <FormControlLabel
                        value={1}
                        control={<Radio />}
                        label="No"
                        className={classes.radio}
                      />
                      <FormControlLabel
                        value={0}
                        control={<Radio />}
                        label="Yes"
                        className={classes.radio}
                      />
                    </RadioGroup>
                  }
                />
                <FormHelperText>
                  {hasError("IS_LAB") && `LAB is mandatory`}
                </FormHelperText>
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
                  "Add Course"
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
