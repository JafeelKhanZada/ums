import axios from "axios";
export const GET_ALL_TABLE_DATA_IN_DEPARTMENT =
  "[UMS] GET ALL DATA [DEPARTMENT]";
export const TOGGLE_LOADER_IN_DEPARTMENT = "[UMS] TOGGLE LOADER [DEPARTMENT]";
export const toggleLoaderInDepartment = () => {
  return {
    type: TOGGLE_LOADER_IN_DEPARTMENT,
  };
};
export const getDepartmentDataInDepartment = (page, pageSize, id) => {
  return (dispatch) => {
    let obj = {
      page: page || 1,
      pageSizes: pageSize || 10,
      id: id || null,
    };
    return axios
      .post("/api/program/getData", obj)
      .then((res) => {
        if (!res.data.error) {
          dispatch({
            type: GET_ALL_TABLE_DATA_IN_DEPARTMENT,
            payload: res.data.data,
          });
        }
      });
  };
};
