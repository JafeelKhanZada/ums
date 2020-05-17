import axios from "axios";
export const GET_ROLES = "[UMS] GET ROLES [ADMIN]";
export const GET_EMPLOYEE = "[UMS] GET EMPLOYEE";
export const GET_DEPARTMENT = "[UMS] GET DEPARTMENT";
export const getEmployee = (page, pageSize, id) => {
  return (dispatch) => {
    let obj = {
      page: page || 1,
      pageSizes: pageSize || 1000,
      id: id || null,
    };
    return axios
      .post("/api/employement/getData", obj)
      .then((res) => {
        if (!res.data.error) {
          return dispatch({
            type: GET_EMPLOYEE,
            payload: res.data.data,
          });
        }
      });
  };
};
export const getRoles = (page, pageSize, id) => {
  return (dispatch) => {
    let obj = {
      page: page || 1,
      pageSizes: pageSize || 1000,
      id: id || null,
    };
    return axios
      .post("/api/roles/get", obj)
      .then((res) => {
        if (!res.data.error) {
          return dispatch({
            type: GET_ROLES,
            payload: res.data.data,
          });
        }
      });
  };
};
export const addAdmin = (payload) => {
  return (dispatch) => {
    return axios
      .post("/api/admin/insert", payload)
      .then((res) => {
        return !res.data.error;
      });
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
            type: GET_DEPARTMENT,
            payload: res.data.data,
          });
        }
      });
  };
};
