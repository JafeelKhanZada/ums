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
import useStyle from "../store/Assets/";
import * as Action from "../store/action";
function Forms() {
  const dispatch = useDispatch();
  const classes = useStyle();
  const [loading, setLoading] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [department, setDepartment] = useState([]);
  const [Roles, setRoles] = useState([]);
  const value = useSelector(({ Admin }) => Admin);
  const { register, handleSubmit, errors, reset, control } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  useEffect(() => {
    setEmployee(value?.employee);
    setRoles(value?.roles);
    setDepartment(value?.department);
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
                  Employee
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
                  Roles
                </InputLabel>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="rID"
                  as={
                    <Select
                      inputRef={register({
                        required: true,
                      })}
                      className={classes.InputContainer}
                    >
                      <MenuItem disbled>Select Employee</MenuItem>;
                      {Roles?.map((v, k) => {
                        return <MenuItem value={v.ID}>{v.ROLE_NAME}</MenuItem>;
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
                  Department
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
                      <MenuItem disbled>Select Employee</MenuItem>;
                      {department?.map((v, k) => {
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
