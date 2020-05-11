import axios from "axios";
export const GET_DASHBOARD_DATA = "[UMS] GET DASHBOARD DATA [SUPER ADMIN HOME]";
export const getDashboardCard = (page, pageSize, id) => {
  return (dispatch) => {
    return axios
      .get("http://localhost:4000/api/miscelenous/getAdminDashboard")
      .then((res) => {
        if (!res.data.error) {
          dispatch({
            type: GET_DASHBOARD_DATA,
            payload: res.data.data[0],
          });
        }
      });
  };
};
