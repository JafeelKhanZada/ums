import * as Action from "../constant";
import axios from "axios";
import jwt from "jsonwebtoken";
import * as Actions from "./index";
export const login = (payload) => {
  return (dispatch) => {
    return axios
      .post("/api/auth/login", payload)
      .then((Res) => {
        if (Res.data) {
          if (Res.data.error) {
            dispatch(Actions.actionError(Res.data.message));
            return false;
          } else {
            let storage = localStorage.getItem("TOKEN");
            if (storage !== null) {
              localStorage.clear();
              localStorage.setItem("TOKEN", Res.data.data.token);
            } else {
              localStorage.setItem("TOKEN", Res.data.data.token);
            }
            let token = Res.data.data.token;
            token = token.split(" ")[1];
            return jwt.verify(token, "FUCKINGSECRET", function (err, decoded) {
              if (!err) {
                return Promise.all([
                  dispatch({
                    type: Action.LOGIN_IN,
                    payload: decoded,
                  }),
                ]).then(() => {
                  dispatch(Actions.actionSuccess(Res.data.message));
                  return true;
                });
              }
            });
          }
        } else {
          dispatch(Actions.actionError("Fetching Error"));
          return false;
        }
      });
  };
};
export const TokenVerify = () => {
  return (dispatch) => {
    let storage = localStorage.getItem("TOKEN");
    if (storage !== null) {
      storage = storage.split(" ")[1];
      jwt.verify(storage, "FUCKINGSECRET", function (err, decoded) {
        if (!err) {
          Promise.all([
            dispatch({
              type: Action.TOKEN_VERIFY,
              payload: decoded,
            }),
          ]).then(() => {
            dispatch(Actions.actionSuccess("Session Resumed!"));
          });
        } else {
          dispatch(Actions.actionError("Session Expired!"));
        }
      });
    }
  };
};

export const LogOut = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch({ type: Action.LOGOUT });
    dispatch(Actions.actionSuccess("Logout Succssfully!"));
  };
};
