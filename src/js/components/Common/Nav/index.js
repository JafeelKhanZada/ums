/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Grid,
  Input,
  FormControl,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import useStyle from "../store/assets/Nav";
import { NotificationsOutlined, InfoOutlined } from "@material-ui/icons";
function Nav() {
  const classes = useStyle();
  return (
    <React.Fragment>
      <Grid className={classes.container} spacing={3} item xs={12}>
        <FormControl>
          <Input
            disableUnderline
            placeholder="Seach"
            className={classes.inputContainer}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <img src="./search.png" className={classes.icon} />
              </InputAdornment>
            }
          />
        </FormControl>
        <div className={classes.leftItem}>
          <NotificationsOutlined
            style={{ color: "white", marginRight: 30, fontSize: 22 }}
          />
          <InfoOutlined
            style={{ color: "white", marginRight: 20, fontSize: 22 }}
          />
          <div className={classes.profile}>
            <img
              className={classes.dp}
              src="https://lh3.googleusercontent.com/proxy/A0SgIeyzRR5nNbLMHhgr7WvKkQAjNv0X0Wsmdq_dGJEX_0XsZ5Mr5ZSYh_gIfHu6iEdTbP8nfRAxCUtXm-7s7W032uKZCHK_jbsF"
              alt=""
            />
            <Typography
              variant="caption"
              className={classes.text}
              display="block"
            >
              Jafeel Waheed
            </Typography>
          </div>
        </div>
      </Grid>
    </React.Fragment>
  );
}

export default Nav;
