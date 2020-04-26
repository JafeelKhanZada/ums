import React from "react";
import { useForm } from "react-hook-form";
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
import DateFnsUtils from "@date-io/date-fns";
import useStyle from "./store/Assets";
function Forms() {
  const classes = useStyle();
  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });
  return (
    <Grid xs={12}>
      <Paper evelation={3}>
        <form className={classes.formContainer}>
          <Grid container justify="center" spacing={3}>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  inputRef={register({ required: true, message: "Enter Name" })}
                  name="fname"
                  label="First Name"
                  placeholder="Enter First Name Here..."
                  helperText={errors?.fname?.message}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  inputRef={register({ required: true, message: "Enter Name" })}
                  name="lname"
                  label="Last Name"
                  placeholder="Enter Last Name Here..."
                  helperText={errors?.fname?.message}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  inputRef={register({ required: true, message: "Enter Name" })}
                  name="email"
                  label="Email"
                  placeholder="Enter Email Here..."
                  helperText={errors?.fname?.message}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel shrink className={classes.InputLabel}>
                  Gender
                </InputLabel>
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
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.InputLabel} shrink>
                  Nationality
                </InputLabel>
                <Select
                  inputRef={register({ required: true, message: "Enter Name" })}
                  name="nationality"
                  className={classes.InputContainer}
                >
                  <MenuItem disbled>Select Nationality</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>{errors?.fname?.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.InputLabel} shrink>
                  Religon
                </InputLabel>
                <Select
                  inputRef={register({ required: true, message: "Enter Name" })}
                  name="religon"
                  className={classes.InputContainer}
                >
                  <MenuItem disbled>Select Religon</MenuItem>
                  <MenuItem value={10}>Hindu</MenuItem>
                  <MenuItem value={10}>Muslim</MenuItem>
                  <MenuItem value={10}>Cristian</MenuItem>
                </Select>
                <FormHelperText>{errors?.fname?.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  inputRef={register({ required: true, message: "Enter Name" })}
                  name="street"
                  label="Street"
                  placeholder="Enter Street Here..."
                  helperText={errors?.fname?.message}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  inputRef={register({ required: true, message: "Enter Name" })}
                  name="house"
                  label="House"
                  placeholder="Enter House Here..."
                  helperText={errors?.fname?.message}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.InputLabel} shrink>
                  City
                </InputLabel>
                <Select
                  inputRef={register({ required: true, message: "Enter Name" })}
                  name="city"
                  className={classes.InputContainer}
                >
                  <MenuItem disbled>Select City</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>{errors?.fname?.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  inputRef={register({ required: true, message: "Enter Name" })}
                  name="postalCode"
                  label="Postal Code"
                  placeholder="Enter Postal Code Here..."
                  helperText={errors?.fname?.message}
                  className={classes.InputContainer}
                  inputProps={{ "aria-label": "weight" }}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.InputLabel} shrink>
                  State
                </InputLabel>
                <Select
                  inputRef={register({ required: true, message: "Enter Name" })}
                  name="state"
                  className={classes.InputContainer}
                >
                  <MenuItem disbled>Select State</MenuItem>
                  <MenuItem value={10}>Hindu</MenuItem>
                  <MenuItem value={10}>Muslim</MenuItem>
                  <MenuItem value={10}>Cristian</MenuItem>
                </Select>
                <FormHelperText>{errors?.fname?.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.InputLabel} shrink>
                  Country
                </InputLabel>
                <Select
                  inputRef={register({ required: true, message: "Enter Name" })}
                  name="country"
                  className={classes.InputContainer}
                >
                  <MenuItem disbled selected>
                    Select Country
                  </MenuItem>
                  <MenuItem value={10}>Hindu</MenuItem>
                  <MenuItem value={10}>Muslim</MenuItem>
                  <MenuItem value={10}>Cristian</MenuItem>
                </Select>
                <FormHelperText>{errors?.fname?.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    value={new Date()}
                    id="date-picker-inline"
                    label="Date picker inline"
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  inputRef={register({ required: true, message: "Enter Name" })}
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder="Enter Phone Number Here..."
                  helperText={errors?.fname?.message}
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
