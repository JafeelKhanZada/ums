import React from "react";
import makeStyle from "../store/assets/Card";
import { Paper, Grid, Typography } from "@material-ui/core";
function Card(props) {
  const style = makeStyle();
  const { head, value, icon, b1, b2, color } = props;
  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={3} className={style.grid}>
        <Paper elevation={3} className={style.container}>
          <div className={style.innerContainer}>
            <div className={style.textContainer}>
              <Typography className={style.textHead} variant="subtitle2">
                {head}
              </Typography>
              <Typography className={style.textValue} variant="h6">
                {value}
              </Typography>
            </div>
            <div className={style.Icon} style={{ backgroundColor: color }}>
              <i
                className={`flaticon-${icon}`}
                style={{ color: "white", fontSize: 20 }}
              />
            </div>
          </div>
          <div className={style.Footer}>
            <Typography className={style.footerText1} variant="subtitle2">
              {b1}
            </Typography>
            <Typography className={style.textValue} variant="subtitle2">
              {b2}
            </Typography>
          </div>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

export default Card;
