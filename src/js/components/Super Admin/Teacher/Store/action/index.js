import axios from "axios";
// export const ADD_COURSE = "[UMS] ADD COURSE [COURSES]";
export const GET_EMPLOYEES = "[UMS] GET EMPLOYEES [TEACHERS]";
export const GET_TEACHERS = "[UMS] GET COURSE [TEACHERS]";
export const addTeachers = (payload) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:4000/api/teachers/InsertTeacher", payload)
      .then((res) => {
        console.log(res);
        return !res.data.error;
      });
  };
};
export const getTeachers = (page, pageSize, id) => {
  return (dispatch) => {
    let obj = {
      page: page || 1,
      pageSizes: pageSize || 10,
      id: id || null,
    };
    return axios
      .post("http://localhost:4000/api/teachers/GetTeacher", obj)
      .then((res) => {
        if (!res.data.error) {
          dispatch({
            type: GET_TEACHERS,
            payload: {
              table: res.data.data,
              size: res.data.totalPage,
            },
          });
        }
      });
  };
};
export const getEmployee = (page, pageSize, id) => {
  return (dispatch) => {
    let obj = {
      page: page || 1,
      pageSizes: pageSize || 1000,
      id: id || null,
    };
    return axios
      .post("http://localhost:4000/api/employement/getData", obj)
      .then((res) => {
        if (!res.data.error) {
          return dispatch({
            type: GET_EMPLOYEES,
            payload: res.data.data,
          });
        }
      });
  };
};
