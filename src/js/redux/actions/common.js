import * as Action from "../constant";
import { NotificationManager } from "react-notifications";
export const actionSuccess = (message) => {
  return (dispatch) => {
    NotificationManager.success(message);
  };
};
export const actionError = (message) => {
  return (dispatch) => {
    NotificationManager.error("Error", message);
  };
};
