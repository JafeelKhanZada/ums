import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  FormControl,
  TextField,
  Paper,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { useSelector, useDispatch } from "react-redux";
import * as Action from "./store/action";
import DateFnsUtils from "@date-io/date-fns";
import useStyle from "./store/Assets";
import moment from "moment";
function Forms() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    errors,
    control,
    setValue,
    getValues,
    reset,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });
  const value = useSelector(({ Student }) => Student);
  const hasError = (inputName) => !!(errors && errors[inputName]);
  const [batch, setBatch] = useState([]);
  useEffect(() => {
    console.log(value);
    setBatch(value.Batch);
  }, [value]);
  const onSubmit = (values) => {
    let obj = {
      ...values,
      dob: moment(values.dob).format("YYYY-MM-DD"),
      admissionDate: moment(values.admissionDate).format("YYYY-MM-DD"),
    };
    dispatch(Action.postStudentInfo(obj)).then((res) => {
      if (res) {
        reset();
      }
    });
  };
  return (
    <Grid xs={12}>
      <Paper evelation={3}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.formContainer}
        >
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  name="fname"
                  label="First Name"
                  placeholder="Enter First Name Here..."
                  inputRef={register({ required: true })}
                  helperText={hasError("fname") && `First Name is mandatory`}
                  error={hasError("fname")}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  name="lname"
                  label="Last Name"
                  placeholder="Enter Last Name Here..."
                  inputRef={register({ required: true })}
                  helperText={hasError("lname") && `Last Name is mandatory`}
                  error={hasError("lname")}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  name="email"
                  label="Email"
                  placeholder="Enter Email Here..."
                  inputRef={register({ required: true })}
                  helperText={hasError("email") && `Email is mandatory`}
                  error={hasError("email")}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                error={hasError("gender")}
                className={classes.formControl}
              >
                <InputLabel shrink className={classes.InputLabel}>
                  Gender
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="gender"
                  as={
                    <RadioGroup
                      aria-label="gender"
                      name="gender"
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                        className={classes.radio}
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                        className={classes.radio}
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                        className={classes.radio}
                      />
                    </RadioGroup>
                  }
                />
                <FormHelperText>
                  {hasError("gender") && `Gender is mandatory`}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                error={hasError("nationality")}
                className={classes.formControl}
              >
                <InputLabel className={classes.InputLabel} shrink>
                  Nationality
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="nationality"
                  as={
                    <Select
                      inputRef={register({
                        required: true,
                      })}
                      className={classes.InputContainer}
                    >
                      <MenuItem disbled>Select Nationality</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  }
                />

                <FormHelperText>
                  {hasError("nationality") && `Nationality is mandatory`}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                error={hasError("religon")}
                className={classes.formControl}
              >
                <InputLabel className={classes.InputLabel} shrink>
                  Religon
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="religon"
                  as={
                    <Select
                      inputRef={register({
                        required: true,
                      })}
                      className={classes.InputContainer}
                    >
                      <MenuItem disbled>Select Religon</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  }
                />

                <FormHelperText>
                  {hasError("religon") && `Religon is mandatory`}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  name="cnic"
                  label="CNIC/B-FORM"
                  placeholder="Enter CNIC/B-Form Here..."
                  inputRef={register({ required: true })}
                  helperText={hasError("cnic") && `CNIC/BFORM is mandatory`}
                  error={hasError("cnic")}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  name="street"
                  label="Street"
                  placeholder="Enter Street Here..."
                  inputRef={register({ required: true })}
                  helperText={hasError("street") && `Street is mandatory`}
                  error={hasError("street")}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  name="house"
                  label="House"
                  placeholder="Enter House Here..."
                  inputRef={register({ required: true })}
                  helperText={hasError("house") && `House is mandatory`}
                  error={hasError("house")}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                error={hasError("city")}
                className={classes.formControl}
              >
                <InputLabel className={classes.InputLabel} shrink>
                  City
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="city"
                  as={
                    <Select
                      inputRef={register({
                        required: true,
                      })}
                      className={classes.InputContainer}
                    >
                      <MenuItem disbled>Select City</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  }
                />

                <FormHelperText>
                  {hasError("city") && `City is mandatory`}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  name="postalCode"
                  label="Postal Code"
                  placeholder="Enter Postal Code Here..."
                  className={classes.InputContainer}
                  inputRef={register({ required: true })}
                  helperText={
                    hasError("postalCode") && `Postal Code is mandatory`
                  }
                  error={hasError("postalCode")}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                error={hasError("state")}
                className={classes.formControl}
              >
                <InputLabel className={classes.InputLabel} shrink>
                  State
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="state"
                  as={
                    <Select
                      inputRef={register({
                        required: true,
                      })}
                      className={classes.InputContainer}
                    >
                      <MenuItem disbled>Select State</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  }
                />

                <FormHelperText>
                  {hasError("city") && `State is mandatory`}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                error={hasError("country")}
                className={classes.formControl}
              >
                <InputLabel className={classes.InputLabel} shrink>
                  Country
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="country"
                  as={
                    <Select
                      inputRef={register({
                        required: true,
                      })}
                      className={classes.InputContainer}
                    >
                      <MenuItem disbled>Select Country</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  }
                />

                <FormHelperText>
                  {hasError("country") && `Country is mandatory`}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                error={hasError("dob")}
                className={[classes.formControl]}
              >
                <InputLabel className={[classes.InputLabel]} shrink>
                  Date Of Birth
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="dob"
                  defaultValue={getValues("dob")}
                  as={
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        style={{ marginTop: 16.5 }}
                        variant="inline"
                        name="dob"
                        value={getValues("dob")}
                        format="MM/dd/yyyy"
                        id="date-picker-inline"
                        onChange={(e) => {
                          setValue([
                            {
                              dob: e,
                            },
                          ]);
                        }}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                          shrink: true,
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  }
                />

                <FormHelperText>
                  {hasError("dob") && `Date Of Birth is mandatory`}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                error={hasError("batchID")}
                className={classes.formControl}
              >
                <InputLabel className={classes.InputLabel} shrink>
                  Batch
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="batchID"
                  as={
                    <Select
                      inputRef={register({
                        required: true,
                      })}
                      className={classes.InputContainer}
                    >
                      <MenuItem disbled>Select Batch</MenuItem>;
                      {batch?.map((v, k) => {
                        return (
                          <MenuItem value={v.batchID}>{v.batchName}</MenuItem>
                        );
                      })}
                    </Select>
                  }
                />

                <FormHelperText>
                  {hasError("batchID") && `Batch is mandatory`}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                error={hasError("admissionDate")}
                className={[classes.formControl]}
              >
                <InputLabel className={[classes.InputLabel]} shrink>
                  Admission Date
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  defaultValue={getValues("admissionDate")}
                  name="admissionDate"
                  as={
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        style={{ marginTop: 16.5 }}
                        name="admissionDate"
                        variant="inline"
                        format="MM/dd/yyyy"
                        id="date-picker-inline"
                        value={getValues("admissionDate")}
                        onChange={(e) =>
                          setValue([
                            {
                              admissionDate: e,
                            },
                          ])
                        }
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                          shrink: true,
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  }
                />

                <FormHelperText>
                  {hasError("admissionDate") && `Date Of Birth is mandatory`}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  name="phoneNumber"
                  label="Phone Number"
                  inputRef={register({ required: true })}
                  helperText={
                    hasError("phoneNumber") && `Phone Number is mandatory`
                  }
                  error={hasError("phoneNumber")}
                  placeholder="Enter Phone Number Here..."
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
                Add Student
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}

export default Forms;
