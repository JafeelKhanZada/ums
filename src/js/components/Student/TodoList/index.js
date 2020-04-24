import React from "react";
import { Grid, Paper, Checkbox, Typography, Divider } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useStyle from "../store/Assets/Home";
function TodoList() {
  const theme = useTheme();
  const classes= useStyle();
  return (
    <Grid
      item
      xs={4}
      className={classes.Todolist_Grid}
    >
      <Paper
        elevation={1}
        className={classes.Todolist_Paper}
      >
        <Typography
          align="center"
          variant="h6"
          className={classes.Todolist_Heading}
        >
          TODO LIST
        </Typography>
        <Divider light />
        <div
          style={{
            borderLeftColor: theme.palette.attendance.success
          }}
          className={classes.Todolist_Content}
        >
          <div style={{ padding: theme.spacing(2) }}>
            <Typography
              variant="subtitle2"
              style={{
                fontFamily: theme.palette.text.fontFamily,
                fontSize: 12,
              }}
            >
              Submit Assignment
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: theme.palette.text.fontFamily,
                fontSize: 14,
              }}
            >
              10 : 30 AM
            </Typography>
          </div>
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>
        <div
          style={{
            borderLeftColor: theme.palette.attendance.warning,
          }}
          className={classes.Todolist_Content}
        >
          <div style={{ padding: theme.spacing(2) }}>
            <Typography
              variant="subtitle2"
              style={{
                fontFamily: theme.palette.text.fontFamily,
                fontSize: 12,
              }}
            >
              Project Proposal
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: theme.palette.text.fontFamily,
                fontSize: 14,
              }}
            >
              06 : 00 PM
            </Typography>
          </div>
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>
        <div
          style={{
            borderLeftColor: theme.palette.attendance.danger,
          }}
          className={classes.Todolist_Content}
        >
          <div style={{ padding: theme.spacing(2) }}>
            <Typography
              variant="subtitle2"
              style={{
                fontFamily: theme.palette.text.fontFamily,
                fontSize: 12,
              }}
            >
              Viva
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: theme.palette.text.fontFamily,
                fontSize: 14,
              }}
            >
              02 : 00 PM
            </Typography>
          </div>
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>
      </Paper>
    </Grid>
  );
}

export default TodoList;
