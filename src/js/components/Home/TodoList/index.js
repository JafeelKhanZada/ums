import React from "react";
import { Grid, Paper, Checkbox, Typography, Divider } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
function TodoList() {
  const theme = useTheme();
  return (
    <Grid
      item
      xs={4}
      style={{
        padding: theme.spacing(2),
        paddingTop: 0,
        borderRight: 10,
      }}
    >
      <Paper
        elevation={1}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
        }}
      >
        <Typography
          align="center"
          variant="h6"
          style={{ padding: theme.spacing(2), borderRadius: 12 }}
        >
          TODO LIST
        </Typography>
        <Divider light />
        <div
          style={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderLeft: 3,
            borderLeftColor: theme.palette.attendance.success,
            borderLeftStyle: "solid",
            marginBottom: theme.spacing(2),
          }}
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
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderLeft: 3,
            borderLeftColor: theme.palette.attendance.warning,
            borderLeftStyle: "solid",
            marginBottom: theme.spacing(2),
          }}
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
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderLeft: 3,
            borderLeftColor: theme.palette.attendance.danger,
            borderLeftStyle: "solid",
            marginBottom: theme.spacing(2),
          }}
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
