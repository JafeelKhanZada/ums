import * as Action from "../constant";
export const actionSuccess = (message) => {
  return {
    type: Action.ALERT_SUCCESS,
    payload: {
      message,
    },
  };
};
export const actionError = (message) => {
  return {
    type: Action.ALERT_ERROR,
    payload: {
      message,
    },
  };
};
