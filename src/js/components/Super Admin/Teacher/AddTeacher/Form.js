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
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@material-ui/core";
import useStyle from "../Store/Assets/AddCourse";
import * as Action from "../Store/action";
function Forms() {
  const dispatch = useDispatch();
  const classes = useStyle();
  const [loading, setLoading] = useState(false);
  const [employee, setEmployee] = useState([]);
  const value = useSelector(({ Teacher }) => Teacher);
  const { register, handleSubmit, errors, reset, control } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  useEffect(() => {
    setEmployee(value.employee);
  }, [value]);
  useEffect(() => {
    dispatch(Action.getEmployee());
  }, []);
  const onSubmit = (values) => {
    setLoading(true);
    dispatch(
      Action.addTeachers({
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
              <FormControl
                error={hasError("EMPLOYEE_ID")}
                className={classes.formControl}
              >
                <InputLabel className={classes.InputLabel} shrink>
                  Employee
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="EMPLOYEE_ID"
                  as={
                    <Select
                      inputRef={register({
                        required: true,
                      })}
                      className={classes.InputContainer}
                    >
                      <MenuItem disbled>Select Employee</MenuItem>;
                      {employee?.map((v, k) => {
                        return (
                          <MenuItem
                            value={v.sID}
                          >{`${v.first_name} ${v.last_name}`}</MenuItem>
                        );
                      })}
                    </Select>
                  }
                />

                <FormHelperText>
                  {hasError("EMPLOYEE_ID") && `Employee is mandatory`}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  name="DESIGNATION"
                  label="Designation"
                  placeholder="Enter Course Name Here..."
                  inputRef={register({ required: true })}
                  helperText={
                    hasError("DESIGNATION") && `Designation is mandatory`
                  }
                  error={hasError("DESIGNATION")}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  name="AOI"
                  label="Area Of Intreset"
                  placeholder="Enter Area Of Intreset Here..."
                  inputRef={register({ required: true })}
                  helperText={
                    hasError("AOI") && `Area Of Intreset is mandatory`
                  }
                  error={hasError("AOI")}
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
