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
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import * as Action from "./store/action";
import useStyle from "./store/Assets";
import moment from "moment";
function Forms() {
  const dispatch = useDispatch();
  const classes = useStyle();
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [department, setDepartment] = useState([]);
  const [dateError, setDateError] = useState({});
  const { register, handleSubmit, errors, reset, control } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const values = useSelector((state) => state.Batch);
  const onSubmit = (values) => {
    setLoading(true);
    dispatch(
      Action.postBatchInBatch({
        ...values,
        startDate: moment(start).format("YYYY-MM-DD"),
        endDate: moment(end).format("YYYY-MM-DD"),
      })
    ).then((res) => {
      if (res) {
        reset();
      }
      setLoading(false);
    });
  };
  useEffect(() => {
    if (values.Program) {
      setDepartment(values.Program);
    }
  }, [values]);
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
                  name="batchCode"
                  label="Batch Code"
                  placeholder="Enter Batch Code Here..."
                  inputRef={register({ required: true })}
                  helperText={
                    hasError("batchCode") && `Batch Code is mandatory`
                  }
                  error={hasError("batchCode")}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    value={start}
                    error={dateError?.start ? true : false}
                    id="date-picker-inline"
                    onChange={(e) => setStart(e)}
                    label="Start Date"
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
                {dateError?.start ? (
                  <FormHelperText>End Date Is Mandotary!</FormHelperText>
                ) : null}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    value={end}
                    error={dateError?.end ? true : false}
                    id="date-picker-inline"
                    label="End Date"
                    onChange={(e) => setEnd(e)}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
                {dateError?.end ? (
                  <FormHelperText>End Date Is Mandotary!</FormHelperText>
                ) : null}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                className={classes.formControl}
                error={hasError("programID")}
              >
                <InputLabel
                  id="programID"
                  className={classes.InputLabel}
                  shrink
                >
                  Program
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="programID"
                  as={
                    <Select
                      labelId={"programID"}
                      className={classes.InputContainer}
                    >
                      <MenuItem disbled>Select Nationality</MenuItem>
                      {department?.map((val, key) => {
                        return (
                          <MenuItem value={val.ID} key={key}>
                            {val.NAME}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  }
                />
                <FormHelperText>
                  {hasError("programID") && `Program is mandatory`}
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
