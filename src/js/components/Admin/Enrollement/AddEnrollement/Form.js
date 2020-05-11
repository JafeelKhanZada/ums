import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Paper,
  Grid,
  Button,
  CircularProgress,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@material-ui/core";
import useStyle from "../store/Assets/";
import * as Action from "../store/action";
function Forms() {
  const dispatch = useDispatch();
  const classes = useStyle();
  const [loading, setLoading] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [semester, setsemester] = useState([]);
  const [section, setSection] = useState([]);
  const [course, setCourse] = useState([]);
  const value = useSelector(({ Admin }) => Admin);
  const { register, handleSubmit, errors, reset, control } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  useEffect(() => {
    setEmployee(value?.employee);
    setsemester(value?.semester);
    setSection(value?.section);
    setCourse(value?.course);
  }, [value]);
  const onSubmit = (values) => {
    setLoading(true);
    dispatch(
      Action.addAdmin({
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
                  Teacher
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="eID"
                  as={
                    <Select
                      inputRef={register({
                        required: true,
                      })}
                      className={classes.InputContainer}
                    >
                      <MenuItem disbled>Select Teacher</MenuItem>;
                      {employee?.map((v, k) => {
                        return (
                          <MenuItem
                            value={v.ID}
                          >{`${v.FIRSTNAME} ${v.LASTNAME}`}</MenuItem>
                        );
                      })}
                    </Select>
                  }
                />

                <FormHelperText>
                  {hasError("eID") && `Employee is mandatory`}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                error={hasError("rID")}
                className={classes.formControl}
              >
                <InputLabel className={classes.InputLabel} shrink>
                  Semester
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="rID"
                  onChange={(e) =>
                    dispatch(Action.getSection(e[0].target.value))
                  }
                  as={
                    <Select
                      inputRef={register({
                        required: true,
                      })}
                      className={classes.InputContainer}
                    >
                      <MenuItem disbled>Select Semester</MenuItem>;
                      {semester?.map((v, k) => {
                        return (
                          <MenuItem value={v.ID}>{v.SEMESTER_CODE}</MenuItem>
                        );
                      })}
                    </Select>
                  }
                />

                <FormHelperText>
                  {hasError("rID") && `Employee is mandatory`}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                error={hasError("dID")}
                className={classes.formControl}
              >
                <InputLabel className={classes.InputLabel} shrink>
                  Section
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="dID"
                  as={
                    <Select
                      inputRef={register({
                        required: true,
                      })}
                      className={classes.InputContainer}
                    >
                      <MenuItem disbled>Select Section</MenuItem>;
                      {section?.map((v, k) => {
                        return (
                          <MenuItem value={v.ID}>{v.SECTION_CODE}</MenuItem>
                        );
                      })}
                    </Select>
                  }
                />

                <FormHelperText>
                  {hasError("dID") && `Employee is mandatory`}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                error={hasError("dID")}
                className={classes.formControl}
              >
                <InputLabel className={classes.InputLabel} shrink>
                  Course
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="dID"
                  as={
                    <Select
                      inputRef={register({
                        required: true,
                      })}
                      className={classes.InputContainer}
                    >
                      <MenuItem disbled>Select Course</MenuItem>;
                      {course?.map((v, k) => {
                        return <MenuItem value={v.ID}>{v.NAME}</MenuItem>;
                      })}
                    </Select>
                  }
                />

                <FormHelperText>
                  {hasError("dID") && `Employee is mandatory`}
                </FormHelperText>
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
                      name="IS_LAB"
                      aria-label="IS_LAB"
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <FormControlLabel
                        value={"false"}
                        control={<Radio />}
                        label="No"
                        className={classes.radio}
                      />
                      <FormControlLabel
                        value={"true"}
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
                  "Add Enrollement"
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
